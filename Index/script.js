let nameChange=()=>{
    let name=document.getElementById('nameWrap');
    name.onmouseover=()=>{
        name.textContent="karen krog"
    };
    name.onmouseout=()=>{
        name.textContent="ren krog"
    };
}
nameChange();

let projToggle=()=>{
    const projects = document.querySelectorAll('.projects');
    function toggleOpen(){
        this.classList.toggle('open');
    }
    function toggleActive(e){
        console.log(e.propertyName);
        if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
        }
    }
    projects.forEach(project=>project.addEventListener('click',toggleOpen));
    projects.forEach(project=>project.addEventListener('transitionend',toggleActive));}
projToggle();