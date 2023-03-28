class Valid2 extends Valid {
   constructor(email, password) {
      super(email, password);
      this.error_message = '';
   }

   

   validate2() {
      if (this.email == '') {
         this.isValid = false;
         this.error_message = 'email empty';
         return this.isValid;
      }
      if (this.password.length < 6)
         this.error_message = 'min length 6';
      return this.isValid;
   }
};

