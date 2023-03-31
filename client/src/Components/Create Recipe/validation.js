const regexOnlyLetters = /^[a-zA-Z]+$/;//solo letras


export function validation(obj) {
    let errors={};
if(!regexOnlyLetters.test(obj.name)){errors.name="only letters"};
if(!obj.name){errors.name="Obligatory field"};

if(obj.diets.length === 0){errors.diets="select at least one diet"};
if(obj.healthScore>100 || obj.healthScore<0){errors.healthScore="only numbers from 0 to 100"};

if(obj.image.length<20){errors.image="url invalidate"}
if(!obj.image){errors.image="Obligatory field"};

if(!obj.summary){errors.summary="Obligatory field"};
if(obj.summary.length<50){errors.summary="50 characters minimum"};

if(obj.steps[0].step.length<10){errors.steps="10 characters minimum"}

return errors;
}

