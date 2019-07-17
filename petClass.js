class Pet {
    constructor(name, age, type, breed) {
        this.name = name
        this.age = age
        this.type = type
        this.breed = breed
        
    }

    makeSound() {
        if (this.type === "dog") {
            console.log("havvvv")
        }
        else if (this.type === "cat") {
            console.log("meewewuer")
        }
        else {
            console.log("RrrRRRRrrRR")
        }
    }

    makeSoundTwice() {
        for (let index = 0; index < 2; index++) {
            this.makeSound()
        }
    }

    repeatMe(cmd) {
        console.log(cmd)
    }
}

var leon = new Pet("Leon",3,"dog","siberian husky")
console.log(leon)

leon.makeSound()