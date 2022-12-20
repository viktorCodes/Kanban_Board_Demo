export default class KanbanAPI{

}

function read(){
    const json = localStorage.getItem('kanban-data');

    if(!json){

        return [
            {
                id: 1,
                items: []
            },
            {
                id: 2,
                items: []
            },
            {
                id: 3,
                items: []
            },
            {
                id: 4,
                items: []
            },
        ]
    }
    return JSON.parse(json)
}

function save(){
  localStorage.setItem("kanban-data", JSON.stringify(data))
}