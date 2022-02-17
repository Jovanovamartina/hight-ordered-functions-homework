let movies = [
    {
        name: "The Dark Knight",
        year: 2008,
        rating: 9.0
    },
    {
        name: "Inception",
        year: 2010,
        rating: 8.8
    },
    {
        name: "The Hobbit",
        year: 2013,
        rating: 8.3
    },
    {
        name:"Dune",
        year:2021,
        rating:7.2
    },
    {
        name: "Fifty shades of gray",
        year: 2010,
        rating: 4
    },
    {
        name: "The Matrix",
        year: 1999,
        rating: 7.5
    },
    {
        name: "Casino",
        year: 1995,
        rating: 8.2
    }
];

function withoutSort(array,parametar){
    let sorting=true;
    do{
        sorting=false;
        for(let i = 0;i <array.length-1;i++){
            if(array[i][parametar]>array[i+1][parametar]){
                let temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                sorting=true;
            }
        }
    }while(sorting)
};
withoutSort(movies,"rating");
for(let i =0;i<movies.length;i++){
    console.log(movies[i]);
};