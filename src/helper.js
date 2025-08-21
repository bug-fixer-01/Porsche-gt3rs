export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

 export const scrollToSection = (id)=>{
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }