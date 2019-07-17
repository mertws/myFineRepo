//hayvanlar leon(kopek), pamuk(kedi), buddy(kopek), boncuk(kedi), mendo(manda)

var leon = {
    name: "leon",
    age: 3,
    type: "dog",
    breed: "siberian husky",
    makeSound: function () {
        console.log("havhav")
    },
    makeSoundTwice: function() {
        for (let index = 0; index < 2; index++) {
            leon.makeSound()
        }
    },
    repeatMe: function(cmd) {
        console.log(cmd)
    },
}

var pamuk = {
    name: "pamuk",
    age: 1,
    type: "cat",
    breed: "bitch",
    makeSound: function() {
        console.log("mEooWeue")
    },
    makeSoundTwice: function() {
        for (let index = 0; index < 2; index++) {
            pamuk.makeSound()
        }
    },
    repeatMe: function(cmd) {
        console.log(cmd)
    },
}

var buddy = {
    name: "buddy",
    age: 12,
    type: "dog",
    breed: "greyhound",
    makeSound: function() {
        console.log("Houew")
    },
    makeSoundTwice: function() {
        for (let index=0; index < 2; index ++) {
            buddy.makeSound()
        }
    },
    repeatMe: function(cmd) {
        console.log(cmd)
    },
}

var boncuk = {
    name: "boncuk",
    age: 5,
    type: "cat",
    breed: "sokakkedisi",
    makeSound: function() {
        console.log("miew")
    },
    makeSoundTwice: function () {
        for (let index=0; index < 2; index++) {
            boncuk.makeSound()
        }
    },
    repeatMe: function(cmd) {
        console.log(cmd)
    },

}

var menda = {
    name: "menda",
    age: 8,
    type: "manda",
    breed: "tarlamandası",
    makeSound: function() {
        console.log("RrrRRRrR")
    },
    makeSoundTwice: function () {
        for (let index=0; index < 2; index++) {
            manda.makeSound()
        }
    },
    repeatMe: function(cmd) {
        console.log(cmd)
    },
}

//leon.makeSound()
//pamuk.makeSoundTwice()
//menda.makeSoundTwice()

var hayvanlar = [leon, pamuk, buddy, boncuk, menda]

for (let i in hayvanlar) {
    var singleAnm = hayvanlar[i]
    singleAnm.makeSound()
}

//arraylere bişey ekleme

