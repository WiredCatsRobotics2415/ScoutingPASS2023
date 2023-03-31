var config_data = `
{
  "title": "Scouting PASS 2023",
  "enable_google_sheets": "true",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "gsCol": "scouter",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "gsCol": "level",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "gsCol": "matchNum",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "gsCol": "teamNum",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "gsCol": "autoStartPosition",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],

  "auton": [
    
    { "name": "Cones on top row:",
      "gsCol": "coneTA",
      "code": "coneTA",
      "type": "counter"
    },
    { "name": "Cubes on top row:",
      "gsCol": "cubeTA",
      "code": "cubeTA",
      "type": "counter"
    },
    { "name": "Cones on middle row:",
    "gsCol": "coneMA",
      "code": "coneMA",
      "type": "counter"
    },
    { "name": "Cubes on middle row:",
    "gsCol": "cubeMA",
      "code": "cubeMA",
      "type": "counter"
    },
    { "name": "Cones on bottom row:",
      "gsCol": "coneBA",
      "code": "coneBA",
      "type": "counter"
    },
    { "name": "Cubes on bottom row:",
      "gsCol": "cubeBA",
      "code": "cubeBA",
      "type": "counter"
    },
    
    { "name": "Crossed Cable",
      "gsCol": "acc",
      "code": "acc",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "gsCol": "acs",
      "code": "acs",
      "type": "bool"
    },
    { "name": "Mobility?",
      "gsCol": "am",
      "code": "am",
      "type": "bool"
    },
    { "name": "Docked",
      "gsCol": "ad",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],

  "teleop": [
    
    { "name": "Cones on top row:",
      "gsCol": "coneTT",
      "code": "coneTT",
      "type": "counter"
    },
    { "name": "Cubes on top row:",
    "gsCol": "cubeTT",
      "code": "cubeTT",
      "type": "counter"
    },
    { "name": "Cones on middle row:",
    "gsCol": "coneMT",
      "code": "coneMT",
      "type": "counter"
    },
    { "name": "Cubes on middle row:",
    "gsCol": "cubeMT",
      "code": "cubeMT",
      "type": "counter"
    },
    { "name": "Cones on bottom row:",
    "gsCol": "coneBT",
      "code": "coneBT",
      "type": "counter"
    },
    { "name": "Cubes on bottom row:",
    "gsCol": "cubeBT",
      "code": "cubeBT",
      "type": "counter"
    },
    
    
    { "name": "Was Defended",
    "gsCol": "wd",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot",
    "gsCol": "who",
      "code": "who",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
    "gsCol": "lnk",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Floor Pickup",
    "gsCol": "fpu",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [

    { "name": "Time of docking:",
    "gsCol": "fpu",
      "code": "dockTime",
      "type": "text"
    },

    { "name": "Final Status",
    "gsCol": "fs",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "dn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
    "gsCol": "ds",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
    "gsCol": "ls",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Defense Rating",
    "gsCol": "dr",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
    "gsCol": "sd",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
    "gsCol": "sr",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
    "gsCol": "die",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
    "gsCol": "tip",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Game Pieces (>2)",
    "gsCol": "dc",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "gsCol": "all",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
    "gsCol": "co",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
