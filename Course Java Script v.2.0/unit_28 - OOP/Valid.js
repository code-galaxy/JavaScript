class Valid {
   constructor(email, password) {
      this.email = email;
      this.password = password;
      this.isValid = false;
   }

   validate() {
      if (this.password.length > 6) {
         this.isValid = true;
         return this.isValid;
      }
      else{
         this.isValid = false;
         return this.isValid;
      }
   }

}

