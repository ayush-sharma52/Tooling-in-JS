//here we will create a modal and a background using classes then append it onto the screen
//the content of the modal will depend on what contenttemplate id user
// passes as argument to constructor
export class modal{
    constructor(contentID,fallbacktext) {
        this.fallbacktext=fallbacktext;
        this.modalTemplate=document.getElementById('modal-template'); // to get the template
        this.contentTemplate=document.getElementById(contentID); 
    }

    show()
    {  
        if('content' in document.createElement('template'))   {
const modals=document.importNode(this.modalTemplate.content,true);// to get nodelist of templatecontents
this.modal=modals.querySelector('.modal'); //selecting a thing from nodelist
this.backdrop=modals.querySelector('.backdrop');
         const modalContents=
         document.importNode(this.contentTemplate.content,true)
         .querySelector('.modal__content');

      this.modal.append(modalContents);
        document.body.insertAdjacentElement('afterbegin',this.modal);
        document.body.insertAdjacentElement('afterbegin',this.backdrop);
    }
    else{
        alert(this.fallbacktext);
    }    
    }

    hide(){
     if(this.modal){
        document.body.removeChild(this.modal);
        document.body.removeChild(this.backdrop);
    }
this.modal=null;
this.backdrop=null;
}
}