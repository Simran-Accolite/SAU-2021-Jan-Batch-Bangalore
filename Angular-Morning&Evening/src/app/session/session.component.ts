import { Component, OnInit } from '@angular/core';
import { model } from './model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  newSession: boolean = false;
  sessions: model[] = [];

  inputTitle: String = "";
  inputTrainer: String = "";
  inputDetails: String = "";
  inputDate: String = "";

  constructor() { }

  newSessionAdd() {
    this.newSession = !this.newSession;
  }

  addSession() {
    if(this.inputTitle === "" || this.inputDetails === "" || this.inputTrainer === "" || this.inputDate == ""){
      alert("All fields are required");
      return;
    }
    this.sessions.unshift( {
      name: this.inputTitle,
        details: this.inputDetails,
        trainer: this.inputTrainer,
        date: this.inputDate,
        isVisible: true,
        showDetails: false,
        edit: false
    }) 
  }

  enableEditor(id: number) {
    this.sessions.map((session, index) => {
      if(index == id) session.edit = !session.edit;
      return session;
    })
  }

  editSession(id: number) {
    if(this.inputTitle === "" || this.inputDetails === "" || this.inputTrainer === "" || this.inputDate == ""){
      alert("All fields are required");
      return;
    }
    this.sessions.map((session, index) => {
      if(index == id) {
        session.name = this.inputTitle,
        session.details = this.inputDetails,
        session.trainer = this.inputTrainer,
        session.date = this.inputDate,
        session.isVisible = true,
        session.showDetails = false,
        session.edit = false
      }
      return session;
    })
  }

  deleteSession(id: number) {
    this.sessions.map((session, index) => {
      if(index == id) session.isVisible = false;
      return session;
    })
  }

  showDetails(id: number) {
    this.sessions.map((session, index) => {
      if(index == id) session.showDetails = !session.showDetails;
      return session;
    })
  }

  ngOnInit(): void {

    this.sessions = [
      {
        name: "Version Control System (VCS), GIT",
        details: "Git is a distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows. ",
        trainer: "Devansh Sharma",
        date: "06-01-2021",
        isVisible: true,
        showDetails: false,
        edit: false
      },
      {
        name: "RDBMS Concepts",
        details: "Stands for Relational Database Management System. An RDBMS is a DBMS designed specifically for relational databases. Therefore, RDBMSes are a subset of DBMSes. A relational database refers to a database that stores data in a structured format, using rows and columns.",
        trainer: "Shivagami S",
        date: "07-01-2021",
        isVisible: true,
        showDetails: false,
        edit: false
      },
      {
        name: "HTML CSS",
        details: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        trainer: "Vigneshwar K",
        date: "08-01-2021",
        isVisible: true,
        showDetails: false,
        edit: false
      },
      {
        name: "Javascript 1",
        details: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
        trainer: "Anushree",
        date: "11-01-2021",
        isVisible: true,
        showDetails: false,
        edit: false
      },

    ]
  }
}