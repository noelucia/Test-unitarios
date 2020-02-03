

// 1. Desarrollar una funcion que reciba por parametro un dia de la semana y devuelva el numero
//que le corresponde
// Comenzar por las casos de test y luego hacere una funcion
/*
(const devolver=(dia)=>{
    switch(dia){
        case "Lunes" :
            return 1
        case "Martes" :
            return 2
        case "Miercoles" : 
            return 3
        case "Jueves" : 
            return 4
        case "Viernes" : 
            return 5
        case "Sabado" : 
            return 6
        case "Domingo" : 
            return 7;
        default:
            throw "El dia no existe";
    };
}

test('si es "Lunes", devolver 1', () =>{
    expect(devolver("Lunes")).toBe(1);
});
test('si es "Martes", devolver 2', () =>{
    expect(devolver("Martes")).toBe(2);
});
test('si es "Miercoles", devolver 3', () =>{
    expect(devolver("Miercoles")).toBe(3);
});
test('si es "Jueves", devolver 4', () =>{
    expect(devolver("Jueves")).toBe(4);
});
test('si es "Viernes", devolver 5', () =>{
    expect(devolver("Viernes")).toBe(5);
});
test('si es "Sabado", devolver 6', () =>{
    expect(devolver("Sabado")).toBe(6);
});
test('si es "Domingo", devolver 7', () =>{
    expect(devolver("Domingo")).toBe(7);
});

test('si es "Demango" tirar error', () =>{
    expect(()=>{
         devolver ("Demango");
        }).toThrow("El dia no existe");
});

/**************************************************
  * Desarrollar una función que convierta
  * de minutos a segundos. Pasar minutos por parámetro
  * y devolver los segundos.
  * Comenzar por los casos de test, y luego hacer la 
  * función. Recordar tirar errores y testearlos.
  */
/*
const transformar =(minutos)=>{
    if (typeof minutos=="numeros "){
        return 
    }
        

}
transformar();

test('Si es "minutos" pasar a "segundos" ', () =>{
    expect(transformar("minutos")).toBe("segundos");
});


/**************************************************
 * Hacer una serie de funciones para un TODO list.
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.
 */
/*
let tareas =[];  //Array vacio 
beforeEach(()=>{                      //funcion anonima(sin parametros),Resetea la funcion para que quede "vacia" y no arrastrar errores
   tareas = [];                       //beforeEach lo pongo una vez y ya le estoy diciendo que esto va a pasar antes de cada funcion//se reinicia
});                              //tengo que cargar datos y decir que ya estan hechos para eso es el false 
const addTarea=(title, description, tareaDone=false)=>{   //se pone false para que sea boleano
   tareas.push([title, description, tareaDone]);          //([]) array dentro de un array 
};
test('cargar tarea con titulo y description. y valido si fue hecha o no',()=>{  //valor default es cuando pongo false=booleano
   addTarea("title", "description");                                        //se le asigna string para dar valores a las variables
   expect(tareas[0]).toStrictEqual(["title", "description", false]);        //.toStrictEqual compara que sean iguales para arrays(se comparar de forma estricta)y objetos
});                                                                        // [0] me devuelve un array
                                                                           //Se espera que tareas (el array) en la posicion 0 haya estos datos. ver si existen
const findTarea=(title)=>{
   for(let i=0; i<tareas.length; i++){  // aca lo que se hace es un for para que recoora el array y busque el titulo.
       if(tareas[i][0] == title){       // para despues poder modificarlo. Encuentro el titulo  para despues poder modificarlo 
           return tareas[i];            
       }
   }
};
test('econtrar la tarea',()=>{
   addTarea("title", "description");
   expect(findTarea("title")).toStrictEqual(["title", "description", false]);   // expect es comparar datos
});

const editTarea=(title,newTitle,newDescription)=>{
  let tarea=findTarea(title);
  tarea[0]=newTitle
  tarea[1]=newDescription  // aca hago una nueva variable para aplicar el for de arriba. Y decir que en la posicion 0 Y 1 lo cambio con lo nuevo
}; // es decir estoy asignando un nuevo valor a esas posiciones 

test('editar tareas',()=>{
    addTarea("title","description");
    editTarea("title", "newtitle", "newdescription");
    expect((tareas[0])).toStrictEqual(["newtitle", "newdescription", false])
});


const deleteTarea=(title)=>{
    tarea=findTarea(title)
    let indice=tareas.findIndex((tareas)=>{ // aca haces un variable nueva para que me busque una posicion en el array
        return tareas[0]=title;
    });
    if(indice>-1){
        throw "El titulo no existe";
        }         
        tareas.splice(indice,1) //una vez que encontro esta posicion decirle que me borre del indice 1 elemento
    }

test('eliminar datos',()=>{
    addTarea("los tres chanchitos","description")
    deleteTarea("los tres chanchitos") //Esto es el valor que va dentro de la variable 
    expect(tareas).toHaveLength(0)
});
test('intenta eliminar pero recibe un throw'),()=>{
    expect()
}


const filtrar=(title)=>{
 

}


test('filtrar tareas')=()=>{
    addTarea("title")
    filtrar("title")
    expect(tareas).toBe([3]);

};


/////EXPORTAR FUNCIONES DESDE OTRO LUGAR////

export default{
import {suma,resta } from "module";
}



//OBEJTOS// 
//Coleccion de datos seleccionados, esto es variable y funciones
// que se llaman propiedades y metodos respectivamente, cuando estan dentro de un objeto

const miObjeto={}; //objeto vacio
const persona={
    nombre: "Noe",
    edad: 24,
    email: "noe@getMaxListeners.com",
    saludo: function(){
        alert('Hola! soy ${this.nombre}'); //signo $ porque estoy imprimiendo una variable 
    } // el this se usa dentro de la funcion para llamar al otro elemento 
},
//Para acceder a el objeto puedo hacerlo con puntos o []

/**********************************************
 * Hacer un programa que nos permita 
 * cargar/modificar/borrar
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 * 
 * Además de esto vamos a necesitar un carrito de compras
 * que nos permita cargar/modificar/borrar productos de 
 * nuestro carrito, sumar el precio total de los elementos
 * de nuestro carrito. 
 

let carrito =[]; 
let lista=[];  
beforeEach(()=>{                      
   carrito = [];                      
}); 

const addDatos= (id, titulo,descripcion,precio) =>{
   lista.push({id:id,titulo:titulo,descripcion:descripcion,precio:precio}) //esto es el objeto, el id me indica el numero de "array " que es
}

test ('cargar datos',()=>{  
    addDatos(1, "titulo","descripcion",98.99);                                     
    expect(lista[0]).toStrictEqual({ // aca comparamos el array con el objeto 
        id:1,
        titulo: "titulo",
        descripcion:"descripcion",
        precio: 98.99    
    })
});   

const findTarea=(id)=>{
    for(let i=0; i<lista.length; i++){  
        if(lista[i].id == id){       
            return lista[i];            
        }
    }

};
test ('encontrar  datos',()=>{
    addDatos(1,"titulo","descripcion",98.99)
    let tarea = findTarea(1); 
    expect (tarea).toStrictEqual({
        id:1,
        titulo: "titulo",
        descripcion:"descripcion",
        precio: 98.99 
    })
});

const editProducto=(id,nTitulo,nDescripcion,nPrecio)=>{
  for(let producto of this.lista){
    if(producto.id == id) {
        producto.titulo = nTitulo 
        producto.descripcion=nDescripcion// 
    }
  }
};


test('editar tareas',()=>{
    addDatos(1,"titulo","descripcion",98.99);
    editProducto(1, "nTitulo", "nDescripcion",100.50);
    expect((tareas[0])).toStrictEqual({
        id:1,
        titulo: "nTitulo",
        descripcion:"nDescripcion",
        precio: 100.50 
    })
});


/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter(son siempre para objetos) para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 




const libro={
    nombre: "Michel Foucault",
    autor:"Vigilar y castigar",
    año:1975,
    isbn:1234,
    get datos(){
        return `${this.datos}`; // Con el get hago que los datos se me escriban en una sola linea 
    },
    reviews:[],
    addReview: function(nombre,reviews,valoracion){
    if(valoracion<1 || valoracion>5){
        throw "Error";
    }
    this.reviews.push({
        nombre,
        review,
        valoracion

    })
    },
    valoracion:function(){
       let suma=0;
       for(let review of this.reviews){ //aca declaro algo nuevo al sacarle la s a reviews
        suma+=review.valoracion;
       }
       return suma/this.review.length;
    }
}

test ('cargar datos',()=>{  
    addReview("titulo","review",5);                                
    expect(reviews[0]).toStrictEqual({ 
        nombre:"Marta",
        review:"genial",
        valoracion:5  
    })
});   
test ('sumar y luego dividir la valoracion',()=>{
    reviews.addReview("nombre","review",3)
    reviews.addReview("nombre","review",5)
    reviews.addReview("nombre","review",2)
    const suma=reviews.valoracion();
    expect(suma).toBe(3,33);
})

/*
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * 
 * Crear varios tipos distintos de ropa.
 

class Ropa{
    constructor(nombre,tipo,medidas=14,tela,color){ //es lo primero que se ejecuta
     this.nombre=nombre;
     this.tipo=tipo;
     this.medidas=medidas;
     this.tela=tela;
     this.color=color; //puedo crear otro objeto mientras este declarado
    }
    calzar (){
        if(this.tipo!="calzado"){
            throw "Necesito calzado para calzar"
        }
        return true;
    }
    probar(){
        if(this.tipo!="remera"){
            throw "Necesito una remera para probar"
        }
        return true;
    }
    medir(){
        if(this.tipo!="pollera"){
            throw "Solo me puedo medir una pollera"
        }
        return true;
    }
}
//const zapatilla= new ropa ("Juan","zapatilla",39,"lona","negro");esto lo voy a declarar en el test 
test('calzar',()=>{
    const calzado=new ropa("bajitas", "deportivas", 39,"lona","negras") // es una copia nueva de un objeto
    expect(calzado.nombre).toBe("bajitas")
})
test ('probar',()=>{
    const remera= new ropa("chomba","manga corta",14,"algodon","violeta");
    expect(remera.tipo).toBe("manga corta")
    })

test ('medir',()=>{
     const pollera=new ropa("falda","mini",75,"jean","negro");
     expect(pollera.medidas).toBe(75)
})

test ('checkear si se puede planchar',()=>{
    const algodon=new ropa()
}) //



//EXTENDS
// Heredad o agrupar 
//Transformar las distintos tipos de ropa del ejercicio anterior a nuevas clases que 
//extiendan de la clase principal
 
class Ropa{
    constructor(nombre,tipo,medidas=14,tela,color){ //es lo primero que se ejecuta
     this.nombre=nombre;
     this.tipo=tipo;
     this.medidas=medidas;
     this.tela=tela;
     this.color=color; //puedo crear otro objeto mientras este declarado
    }
} 
class Calzado extends Ropa {
    constructor(tipo,tela,color,marca,cordones=true){  //va true porque en principio estab atados
    super(tipo,tela,color,marca);
    this.cordones=cordones;
    }
   calzar(){
    if(this.cordones!=true){ // aca ponga la condicion para filtrar si estan ataados o no , en caso que no corta le ejecucion
        throw "No estan atados"
    }
    return true // si estan atados pasa directo aca
   }
}

class Vestimenta extends Ropa{
    constructor(tipo,marca,verano=true){
    super(tipo,marca);
    this.verano=verano;
    }
    clasificar(){
        if(this.verano!=true){
            throw "Fuera de temporada"
        }
    return true
    }
}

class Top extends Vestimenta {
    constructor(tipo,tela,color,botones=true){
    super(tipo,tela,color);
    this.botones=botones;
    }
abotonar(){
    if (!this.botones){
        throw "Esta prenda es una remera"
    }
    return true 
    }
}

test('calzar',()=>{
    const calzado=new Calzado("tipo","tela","color","marca",true) // es una copia nueva de un objeto
    expect(calzado.calzar()).toBe(true)
})

test('clasificar',()=>{
    const vestimenta=new Vestimenta("tipo","marca",true)
    expect(vestimenta.clasificar()).toBe(true)

})

test('abotonar',()=>{
    const top=new Top("tipo","tela","color",true)
    expect(top.abotonar()).toBe(true)

})
*/
