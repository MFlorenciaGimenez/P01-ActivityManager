class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.currentId = 1;
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(title, description, imgUrl){
        const newActivity = new Activity( this.currentId, title, description, imgUrl);
        this.activities.push(newActivity);
        this.currentId++;
        return newActivity;
    }
    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id);
    }

}

describe("Activity", function(){

  it("deberia crear una actividad correctamente con los datos ingresados", function(){
    const activity = new Activity(1, "correr", "correr es bueno", "http://imagen.com/correr");
      expect(activity.id).toBe(1);
      expect(activity.title).toBe("correr");
      expect(activity.description).toBe("correr es bueno");
      expect(activity.imgUrl).toBe("http://imagen.com/correr"); 

  });

});

describe("Repository", function(){

  let repositorio;
  beforeEach(function(){
    repositorio = new Repository(); 
  });

  it("deberia empezar en 0", function(){
    expect(repositorio.getAllActivities().length).toBe(0);
  });

  it("deberia crear una nueva actividad y agregarla al repositorio", function(){
    const nueva = repositorio.createActivity("correr", "correr es bueno", "http://imagen.com/correr");
      expect(repositorio.getAllActivities().length).toBe(1);
      expect(nueva.id).toBe(1);
      expect(nueva.title).toBe("correr");
  });

  it("deberia eliminar una actividad por id", function(){
    const act1 = repositorio.createActivity("correr", "correr es bueno", "http://imagen.com/correr");
    const act2 = repositorio.createActivity("nadar", "nadar es bueno", "http://img.com/nadar");

    repositorio.deleteActivity(act1.id);
    const resto = repositorio.getAllActivities();
    expect(resto.length).toBe(1);
    expect(resto[0].id).toBe(act2.id);
  });
})









describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});



describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});
