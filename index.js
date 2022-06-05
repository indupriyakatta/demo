var list = ["mohini", "vinni", "indu"]

function onDelete(n) {

    list = list.filter((name, i) => i != n)
}

onDelete(2);
console.log(list);