import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/models/movemets';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { MovementsService } from 'src/app/services/movements/movements.service';
import { User } from '../../models/users';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  idUser: number = Number(sessionStorage.getItem('idUser'));;
  users: any = [];
  account: any = [];
  userAccount: any = [];
  transaction: number;

  movement : Movement = {}

  constructor(private usersService: UsersService, private accountsService : AccountsService, 
    private movementService: MovementsService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      res => {this.users = res;
    },

      error => console.log(error)
    )
  }

  transfer(id: number) {
    this.accountsService.findAccount(id).subscribe(
      res => {this.account = res;
        let response = res as any;
        this.getUserAccount();
        this.updateTransfer(response);},
      error => console.log(error)
    )
  }

  updateTransfer(account: any){
    let idUser = account[0].id_user;
    let currentValue = account[0].account_amount;
    this.account[0].account_amount = this.transaction + currentValue;

    if(this.transaction > 0 ){
      this.accountsService.updateAccount(idUser,this.account[0]).subscribe(
        res => { 
          this.generateMovement("3", this.transaction, this.account[0].id_account)
        },
        error => console.log(error)
      )
    }else{
      alert('')
    }
  }

  getUserAccount(){
    this.accountsService.findAccount(this.idUser).subscribe(
      res => {
        let response = res as any;
        this.userAccount = response;
        this.withdrawMoney(this.userAccount);
      },
      error => console.log(error)
    )
  }

  withdrawMoney(data: any){
    let currentValue = data[0].account_amount;
    this.userAccount[0].account_amount = currentValue - this.transaction;
    this.accountsService.updateAccount(this.idUser,this.userAccount[0]).subscribe(
      res => { 
        this.generateMovement("4", this.transaction, this.userAccount[0].id_account)
      },
      error => console.log(error)
    )
  }

  generateMovement(movementType : string, movementAmount : number, goTo: number){
    this.movement.movement_date = new Date();
    this.movement.movement_amount = movementAmount;
    this.movement.id_movement_type = movementType;
    this.movement.id_account = goTo;
    debugger;
    this.movementService.saveMovement(this.movement).subscribe(
      res => {
        console.log('genera movimiento asociado');
      },
      error => console.log(error)
    )
  }
}

