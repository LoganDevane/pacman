const canvas = document.getElementById('
    canvas')
    const c = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight 

    class boundary {
        constructor({position}) {
            this.position = position
            this.width = 40
            this.height = 40
        }
    }
    draw() {
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }



    const map = []
    const boundaries = [
        new boundary({position: {x: 0, y: 0}}),
        new boundary({position: {x:41 y:0}}),
    ]