/**
 * Created by ariboyarsky on 9/23/2015.
 */
var tabulate = function (data,columns) {
    var table = d3.select('body').append('table')
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columnsNames)
        .enter()
        .append('th')
        .text(function (d) { return d })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] }
            })
        })
        .enter()
        .append('td')
        .text(function (d) { return (d.value ? d.value : "No Data") })

    return table;
}

d3.csv('json/CSV Data/o.csv',function (data) {
    var columnNames = ['Country', 'Data Year', 'Polity IV Score', 'Internet Users', 'GDP per capita growth (annual %)'];
    var columns = ['Country','data_year','p4_score','CCode', 'IU_2014', 'GDPPCC_2014']
    tabulate(data,columns)
})
