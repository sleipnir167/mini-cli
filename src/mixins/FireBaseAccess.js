import firebase from "firebase/app"
import moment from 'moment'

export default {
  data() {
    return {
      FBsyasMaster: [],
    };
  },
  created () {
    // this.selSyasMaster();
  },

  // mounted(){

  // },

  methods: {
    initialize () {
    },
    selSyasMaster () {
      try {
        const db = firebase.firestore();
        db.collection('syasMaster')  
          .get()  
          .then(snapshot => {  
            snapshot.forEach(doc => {  
              let item = doc.data();
              item.id = doc.id;
              this.FBsyasMaster.push(item);
            })  
          }) 
        return true;
      }
      catch(e)
      {
        console.log("catchA");
        console.log(e);
        return false;
      }
    },
    selSyasMasteritem () {
      try {
        console.log("selSyasMasteritemStart");
        const db = firebase.firestore();
        db.collection('syasMaster')  
          .get()  
          .then(snapshot => {  
            snapshot.forEach(doc => {  
              let item = doc.data();
              item.id = doc.id;
              this.FBsyasMaster.push(item);
              console.log(item);
            })  
          }) 

        console.log("selSyasMasteritemEnd");
        console.log(this.FBsyasMaster);
        return this.FBsyasMaster;
      }
      catch(e)
      {
        console.log("catchA");
        console.log(e);
        return false;
      }
    },
    getSyasMaster: function() {
      return "xyza";
    },
    startParse: function(start) {
      return moment(start).format('YYYY-MM-DD')
    },
    endParse: function(end) {
      return moment(end).format('YYYY-MM-DD')
    },
  },
}