import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstellationService {
  private constellations: Constellation[] = [
    {
      name: 'Aries',
      description:
        'Esta constelación es atravesada por el Sol del 19 de abril al 13 de mayo. En el orden del zodíaco, la constelación se sitúa entre Piscis a el oeste y Tauro al este. Aries también designa un signo de zodíaco correspondiente al sector de 30° de la eclíptica atravesada por ello Sol del 21 de Marte al 19 de abril.',
      stars: ['Hamal', 'Sheratan', 'Mesarthim', '53 Arietis'],
      history: 'El rey Atamante tenía dos hijos Frixo y Hele, de su matrimonio con Néfele. Tras la muerte de su madre, Atamante se volvió a casar con Ino, con la que tuvo también dos hijos. La reina Ino quería que sus hijos heredaran el trono, por lo que había que deshacerse de Frixo y Hele. Para ello ideó una estratagema perverso. Encendió fuego bajo la tierra de los graneros, así cuando se sembró el trigo el grano tostado no nació. Ante la amenaza del hambre el rey envió emisarios a consultar el oráculo de Delfos. Cuando los emisarios volvían, la reina Ino los sobornó para que dijeran lo que ella quería: que los dioses exigían el sacrificio de Frixo y Hele. El dios Hermes envió a los niños un carnero alado con la lana de oro. Montado sobre el carnero viajaremos hacia oriente, pero Hele cayó al mar que recibió el nombre de Helesponto en honor a Hele. Este accidente hizo que Frixo perdiera la confianza en el carnero volador. El haga aterrizar y continuó a pie con él hasta el bosque de Ares a la Cólquida. Allí fue acogido por el rey Eetes, y se casó a la hija del rey. Como muestra de agradecimiento, Frixo sacrificó el carnero y ofreció el vellocino de oro al rey, quien lo colgó en una encina del bosque sagrado de Ares.',
      img: 'assets/img/main_images/aries.png',
      imgInfo: 'assets/img/large-images/aries.webp',
      imgSymbol: 'assets/img/symbols/aries.jpg'
    },
    {
      name: 'Tauro',
      description:
        'Esta constelación es atravesada por el Sol del 14 de mayo al 19 de junio. En el orden del zodíaco, la constelación se sitúa entre Aries al oeste y Géminis al este. Tauro también designa un signo de zodíaco correspondiente al sector de 30° de la eclíptica atravesada por él Sol del 20 el abril en el 20 de mayo.',
      stars: ['Aldebaran', 'Elnath', 'Beta Tauri', 'Auriga', 'Zeta Tauri'],
      history: 'En la mitología griega, Tauro aparte de representar un toro corriente, también corresponde al minotauro de la mitología griega y corresponde a Zeus en forma de toro , que tomó para tomar Europa, una princesa fenicia, la que Zeus hizo subir sobre el lomo y , antes de que s’adonàs , se lanzó al mar y comenzó a nadar hasta que llegó a Creta, donde volvió a recuperar el aspecto de un dios. Zeus consiguió conquistar Europa y de esta unión nació Minos.',
      img: 'assets/img/main_images/taurus.png',
      imgInfo: 'assets/img/large-images/taurus.webp',
      imgSymbol: 'assets/img/symbols/taurus.jpg'
    },
    {
      name: 'Geminis',
      description:
        'La dirección Géminis será indicada por la estrella Rigel y Betelgeuse de la constelación de Orión. En efecto, si se traza una línea imaginaria entre estas dos estrellas y qué perseguimos esta línea hacia el norte es, alcanzaremos entonces fácilmente a Géminis, constelación muy extensa en forma de rectángulo. Los dos más estrellas brillantes de la constelación están Pólux en la cabeza de Géminis de izquierda (β Gem de magnitud 1,18 à 33,72 AL) y Castor en la cabeza de Géminis de derecha (α Gem de magnitud 1,60 à 51,55 AL).',
      stars: ['CastorA', 'CastorB', 'Pólux', 'Alhena', 'Tejat Posterior'],
      history: 'Para los griegos, la constelación de Gemini representaba a Cástor y Pólux , los hermanos gemelos de Helena de Troya. Los romanos veían Rómulo y Remo.',
      img: 'assets/img/main_images/gemini.png',
      imgInfo: 'assets/img/large-images/gemini.webp',
      imgSymbol: 'assets/img/symbols/gemini.jpg'
    },
  ];

  constructor() {}

  getConstellations(){
    return this.constellations;
  }

  getConstellation(index:number){
    return this.constellations[index];
  }

  searchConstellations(value:string):Constellation[]{
    let constArr:Constellation[] = [];
    value = value.toLocaleLowerCase();

    for(let i = 0; i<this.constellations.length; i++){
      let constellation = this.constellations[i];
      let name = constellation.name.toLowerCase();
      if(name.indexOf(value) >=0 ){
        constellation.idx = i;
        constArr.push(constellation);
      }
    }
    return constArr;
  }
}

export interface Constellation {
  name: string;
  description: string;
  stars: string[];
  history: string;
  img:string;
  imgInfo:string,
  imgSymbol:string,
  idx?:number;
}
