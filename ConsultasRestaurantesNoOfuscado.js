//1
db.restaurantes.find()
//2
db.restaurantes.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
//3
db.restaurantes.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
//4
db.restaurantes.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1})
//5
db.restaurantes.find({borough: "Bronx"})
//6   muestra 5
db.restaurantes.find({borough: "Bronx"}).limit(5)
//7   muestra 5 y salta 5
db.restaurantes.find({borough: "Bronx"}).skip(5).limit(5)
//8   resultado mayor a 90
db.restaurantes.find({ "grades.score": { $gt: 90 } })
//9   resultado mayor a 80 y menor a 100
db.restaurantes.find({ "grades.score": { $gt: 80, $lt: 100 } })
//10     longitud inferior
db.restaurantes.find({ "address.coord": { $lt: -95.754168 } })
//11    $ne no contiene esa comida,  $gt  valor superior a ,  $lt  longitud inferior a,    
db.restaurantes.find({"cuisine": { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord": { $lt: -65.754168 }})
//12
db.restaurantes.find({cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord": { $lt: -65.754168 }})
//13     .sort  especifica orden de la consulta -1  orden descendente
db.restaurantes.find({ cuisine: { $ne: "American" }, "grades.grade": "A", borough: { $ne: "Brooklyn" }}).sort({ cuisine: -1 })
//14     Wil primeras 3 letras del nombre
db.restaurantes.find({ name: { $regex: /^Wil/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
//15     ces ultimas 3 letras nombre
db.restaurantes.find({ name: { $regex: /ces$/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
//16     Reg en cualquier parte del nombre
db.restaurantes.find({ name: { $regex: /Reg/ } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
//17  $or  compara 2, uno u otro
db.restaurantes.find({borough: "Bronx", $or: [{ cuisine: "American" }, { cuisine: "Chinese" }]})
//18     $in   pertenecen a
db.restaurantes.find({ borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
//19    $nin  no pertenece a
db.restaurantes.find({ borough: { $nin: [ "Staten Island", "Queens", "Bronx", "Brooklyn" ] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
//20    $lt  menor que
db.restaurantes.find({"grades.score": { $lt: 10 } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
//21   $nor  no contenga varios valores
db.restaurantes.find({cuisine: "Seafood", $nor: [{ cuisine: "American" }, { cuisine: "Chinese" }, { name: { $regex: /^Wil/ }}]}, {restaurante_id: 1, name: 1, borough: 1,cuisine: 1})
//22    $elemMatch   coinciden documentos con 1 campo en comun
db.restaurantes.find({grades: {$elemMatch: {grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z")}}}, {restaurant_id: 1, name: 1, grades: 1})
 //23    
 db.restaurantes.find({"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")}, { restaurant_id: 1, name: 1, grades: 1});
//24
db.restaurantes.find({"coord.1": { $gt: 42, $lt: 52 }}, {restaurant_id: 1, name: 1, address: 1, coord: 1, _id: 0})
//25  ordena nombre por orden ascendente
db.restaurantes.find().sort({name: 1})
//26   orden descendente
db.restaurantes.find().sort({name: -1})
//27
db.restaurantes.find().sort({cuisine: 1, borough: -1})
//28   $exists  verifica si un campo existe 
db.restaurantes.find({ "address.street": {$exists: true}})
//29    $type  busca por el tipo de valor (double)
db.restaurantes.find({}, {"address.coord": {$type: "double"}})
//30
db.restaurantes.find({}, {restaurant_id: 1, name: 1, "grades.grade": 1})
//31
db.restaurantes.find({name: {$regex: /mon/}}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 })
//32
db.restaurantes.find({name: {$regex: /^Mad/}}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 })



