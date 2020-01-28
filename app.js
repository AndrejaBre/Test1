function godine(limit, ...god){
    god.forEach(el => {
        console.log(2020 - el >= limit);
    });
}

godine(18,1993, 2003, 2000, 2019);