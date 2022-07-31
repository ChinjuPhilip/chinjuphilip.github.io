function renderScene1(){
    
    let yData_State = d3.scaleLinear().domain([stateDeadMax+40,0]).range([0,height]);
    let xData_State = d3.scaleLinear().domain([11,0]).range([width,0]);
    
    let svg = d3.select(".scene-content")
    .select("svg")
    .attr("id","svg").attr("height",height+(margin*2)).attr("width",width+(margin*2));
    
    let graph = svg.append("g");
    graph.attr("transform","translate("+margin+","+margin+")")

    graph.append("g")
    .attr("transform", "translate(0," + 0 + ")")
    .call(d3.axisLeft(yData_State).ticks(10));

    graph.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xData_State).ticks(12).tickFormat(function(d){
        return months[d]
    }));

    let plotCircle = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Dead)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Dead)} )        
        .attr('stroke', "red")
        .attr('stroke-width', 2)
}

function renderScene2(){    
    let yData_State = d3.scaleLinear().domain([monthInjuredMax+40,0]).range([0,height]);
    let xData_State = d3.scaleLinear().domain([11,0]).range([width,0]);
    
    let svg = d3.select(".scene-content")
    .select("svg")
    .attr("id","svg").attr("height",height+(margin*2)).attr("width",width+(margin*2));
    
    let graph = svg.append("g");
    graph.attr("transform","translate("+margin+","+margin+")")

    graph.append("g")
    .attr("transform", "translate(0," + 0 + ")")
    .call(d3.axisLeft(yData_State).ticks(10));

    graph.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xData_State).ticks(12).tickFormat(function(d){
        return months[d]
    }));

    let plotCircle = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Injured)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Injured)} )        
        .attr('stroke', "red")
        .attr('stroke-width', 2)
}

function renderScene3(){    
    let yData_State = d3.scaleLinear().domain([monthInjuredMax+monthDeadMax,0]).range([0,height]);
    let xData_State = d3.scaleLinear().domain([11,0]).range([width,0]);
    
    let svg = d3.select(".scene-content")
    .select("svg")
    .attr("id","svg").attr("height",height+(margin*2)).attr("width",width+(margin*2));
    
    let graph = svg.append("g");
    graph.attr("transform","translate("+margin+","+margin+")")

    graph.append("g")
    .attr("transform", "translate(0," + 0 + ")")
    .call(d3.axisLeft(yData_State).ticks(10));

    graph.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xData_State).ticks(12).tickFormat(function(d){
        return months[d]
    }));

    let plotline = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Dead)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Dead)} )        
        .attr('stroke', "red")
        .attr('stroke-width', 2)
    
        let plotline2 = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Injured+monthData[months[index]][selectedYear].Dead)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Injured+monthData[months[index+1]][selectedYear].Dead)} )        
        .attr('stroke', "green")
        .attr('stroke-width', 2)
}

function renderScene4(){    
    let yData_State = d3.scaleLinear().domain([monthInjuredMax+monthDeadMax,0]).range([0,height]);
    let xData_State = d3.scaleLinear().domain([11,0]).range([width,0]);
    
    let svg = d3.select(".scene-content")
    .select("svg")
    .attr("id","svg").attr("height",height+(margin*2)).attr("width",width+(margin*2));
    
    let graph = svg.append("g");
    graph.attr("transform","translate("+margin+","+margin+")")

    graph.append("g")
    .attr("transform", "translate(0," + 0 + ")")
    .call(d3.axisLeft(yData_State).ticks(10));

    graph.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xData_State).ticks(12).tickFormat(function(d){
        return months[d]
    }));

    let plotline = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Injured)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Injured)} )        
        .attr('stroke', "red")
        .attr('stroke-width', 2)
    
        let plotline2 = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Injured+monthData[months[index]][selectedYear].Dead)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Injured+monthData[months[index+1]][selectedYear].Dead)} )        
        .attr('stroke', "green")
        .attr('stroke-width', 2)
}

function renderScene5(){    
    
    let yData_State = d3.scaleLinear().domain([monthInjuredMax+monthDeadMax,0]).range([0,height]);
    let xData_State = d3.scaleLinear().domain([11,0]).range([width,0]);
    
    d3.select(".state-select").select("select")
    .selectAll("dot")
    .data(Object.keys(stateData))
    .enter()
    .append("option")
    .attr("value", function (d){return d})
    .text(function (d){return d})


    let svg = d3.select(".scene-content")
    .select("svg")
    .attr("id","svg").attr("height",height+(margin*2)).attr("width",width+(margin*2));
    
    let graph = svg.append("g");
    graph.attr("transform","translate("+margin+","+margin+")")

    graph.append("g")
    .attr("transform", "translate(0," + 0 + ")")
    .call(d3.axisLeft(yData_State).ticks(10));

    graph.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xData_State).ticks(12).tickFormat(function(d){
        return months[d]
    }));

    let plotline = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Injured)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Injured)} )        
        .attr('stroke', "red")
        .attr('stroke-width', 2)
    
        let plotline2 = svg.append('g').attr("class", "test")        
        graph.append('g')
        .selectAll("dot")
        .data([0,1,2,3,4,5,6,7,8,9,10])                    
        .enter()
        .append("line")
        .attr("x1", function(m,index){ return xData_State(index)} )
        .attr("y1", function(m,index){ return yData_State(monthData[months[index]][selectedYear].Injured+monthData[months[index]][selectedYear].Dead)} )
        .attr("x2", function(m,index){ return xData_State(index+1)} )
        .attr("y2", function(m,index){ return yData_State(monthData[months[index+1]][selectedYear].Injured+monthData[months[index+1]][selectedYear].Dead)} )        
        .attr('stroke', "green")
        .attr('stroke-width', 2)
}

