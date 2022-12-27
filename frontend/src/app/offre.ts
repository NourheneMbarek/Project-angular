export class Offre {

    constructor(
        public nom_offre : String,
        public description : String,
        public prix : Number,
        public image : String,
        public date_debut : Date,
        public date_fin : Date , 
        public is_new : Boolean
    ){
    
    }
}
