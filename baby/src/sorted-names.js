import jsonData from './data/babyNamesData.json';
function Sortednames({filterNames}) {
  return (
    <div>
    {jsonData.sort(function (a,b) {
      var alphabeticSort = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      return (alphabeticSort);

    })
    .filter(el => el.name.toLowerCase().includes(filterNames))
    .map((element) => {if (element.sex === "m") {return (<var><button className='babyNamesBlue' >{element.name}</button></var>);}
    else {return (<var><button className='babyNamesPink' >{element.name}</button></var>)}})}
</div>
    
  )
}

export default Sortednames;