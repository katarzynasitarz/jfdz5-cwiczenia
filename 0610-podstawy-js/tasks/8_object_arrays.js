/*
 =====================================================
 OBJECT & ARRAY - GETTING VALUES
 =====================================================

 1. Wyświetl w konsoli wartości wszystkich elementów poniższej tablicy:

 -----------------------------------------------------
 CODE GOES BELOW */
var skills = ['JavaScript', 'HTML', 'CSS'];

/*
 -----------------------------------------------------

 2. Wyświetl w konsoli zaznaczone komentarzami wartości
 -----------------------------------------------------
 CODE GOES BELOW */
var batteryContainer = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters": {
        "batter": [
            {"id": "1001", "type": "Regular"},
            {"id": "1002", "type": "Chocolate"},
            {"id": "1003", "type": "Blueberry"}, // Blueberry
            {"id": "1004", "type": "Devil's Food"}
        ]
    },
    "topping": [
        {"id": "5001", "type": "None"},
        {"id": "5002", "type": "Glazed"},
        {"id": "5005", "type": ["Sweet", "Spicy"]}, // Sweet
        {"id": "5007", "type": ["Sweet", { spicy: "maxSpicy"}]}, // maxSpicy
        {"id": "5006", "type": "Chocolate with Sprinkles"},
        {"id": "5003", "type": "Chocolate"},
        {"id": "5004", "type": "Maple"}
    ]
};

/*
 -----------------------------------------------------

 3*. Wyświetl w konsoli zaznaczone komentarzami wartości:
 -----------------------------------------------------
 CODE GOES BELOW */
var medicine = {
    "problems": [{
        "Diabetes":[{
            "medications":[{
                "medicationsClasses":[{
                    "className":[{
                        "associatedDrug":[
                            {
                                "name":"asprin",
                                "dose":"",
                                "strength":"500 mg"
                            },
                            {
                                "name":"ketanol", // ketanol
                                "dose":"",
                                "strength":"500 mg"
                            },
                            {
                                "name":"vortex",
                                "dose":"",
                                "strength":"500 mg"
                            }
                        ],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg" // 500mg
                        }]
                    }],
                    "className2":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }]
                }]
            }],
            "labs":[{
                "missing_field": "missing_value"
            }]
        }],
        "Asthma":[{}]
    }]};


/*
 -----------------------------------------------------




