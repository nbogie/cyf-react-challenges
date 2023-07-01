import jsonData from './data/babyNamesData.json';
function Sortednames() {
  return (
    <>
    {jsonData.sort(function (a,b) {
      var alphabeticSort = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      return (alphabeticSort);

    })
    .map((element) => {if (element.sex === "m") {return (<var><span className='babyNamesBlue' >{element.name}</span></var>);}
    else {return (<var><span className='babyNamesPink' >{element.name}</span></var>)}})}
</>
    
  )
}

export default Sortednames;