export default function mapSelect(data, parentClassName, childClassName){
    for (let key in data){
        let option = document.createElement('option');
        const parent = document.querySelector(parentClassName);
        parent.appendChild(option);
        let name = data[key].nome;
        let code = data[key].codigo;
        option.setAttribute('value', `${code}`);
        option.setAttribute('class', childClassName);
        option.innerHTML = name;
    }
}