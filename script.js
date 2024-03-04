let n=8
let table = document.querySelector(".table")
window.addEventListener("load", () => {
    initializeGrid(n)

    
    let boxes = document.querySelectorAll(".box")

    table.addEventListener("mouseover", (e) => {
        let [cri, cci] = e.target.dataset.index.split('-')

        for(let i=0; i<boxes.length; i++){
            boxes[i].classList.remove("yellow")
                
        }

        let datasetforyellow = {}

        traverseTopLeft(cri, cci, datasetforyellow)
        traverseTopRight(cri, cci, datasetforyellow)
        traverseBottomLeft(cri, cci, datasetforyellow)
        traverseBottomRight(cri, cci, datasetforyellow)

        e.target.classList.add("yellow")
        
        for(let i=0; i<boxes.length; i++){
            let data = boxes[i].dataset.index

            if(datasetforyellow[data] === true){
                boxes[i].classList.add("yellow")
            }
                
        }

    })

    table.addEventListener("mouseleave", () => {
        for(let i=0; i<boxes.length; i++){
            boxes[i].classList.remove("yellow")
                
        }
    })

})

function traverseTopLeft(cri, cci, datasetforyellow){

    while(cri>=0 && cci>=0){

        let dataindex = `${cri} - ${cci}`
        datasetforyellow[dataindex] = true

        cri--
        cci--
    }

}

function traverseTopRight(cri, cci, datasetforyellow){

    while(cri>=0 && cci<n){

        let dataindex = `${cri} - ${cci}`
        datasetforyellow[dataindex] = true

        cri--
        cci++
    }

}

function traverseBottomLeft(cri, cci, datasetforyellow){

    while(cri<n && cci>=0){

        let dataindex = `${cri } - ${cci}`
        datasetforyellow[dataindex] = true

        cri++
        cci--
    }

}

function traverseBottomRight(cri, cci, datasetforyellow){

    while(cri<n && cci<n){

        let dataindex = `${cri} - ${cci}`
        datasetforyellow[dataindex] = true

        cri++
        cci++
    }
    
}

function initializeGrid(n){

    for(let i=0; i<n; i++){
        let row = document.createElement('tr')
        table.appendChild(row)

        let cells = document.createDocumentFragment()

        let white = i%2 === 0

        for(let ci=0; ci<n; ci++){
            let cell = document.createElement('td')
            cell.setAttribute("class", "box")
            cell.setAttribute("data-index", `${i} - ${ci}`)

            cell.classList.add((white)?"white":"black")

            cells.appendChild(cell)

            white = !white
        }

        row.appendChild(cells)
    }
}