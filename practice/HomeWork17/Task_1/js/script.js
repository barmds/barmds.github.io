let skill = {
    name: "html",
    level: 5,
    getSkill: function(){
        return this.name + " - " + this.level;
    }
}
console.log(skill.getSkill());

