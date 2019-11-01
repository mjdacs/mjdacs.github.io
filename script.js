

function tabulate(data,columns) {

    let table = d3.select('body').append('table').attr("id", "presidentTable");
    let head = table.append('thead')
    let body = table.append('tbody')

    head.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

    let rows = body.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

    let cells = rows.selectAll('td')
	.data(function(row) {
	    return columns.map(function (column) {
	    	return { column: column, value: row[column] }
	    })
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value })

    return table;
}

d3.csv('https://raw.githubusercontent.com/mjdacs/mjdacs.github.io/master/presidents.csv?_sm_au_=iVVLS3mJBZH0BqS7',function (data) {
    let columns = ["Name","Height","Weight"]
    tabulate(data,columns)
})
