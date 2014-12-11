/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'stadtrotation',
                            symbolName: 'stadtrotation',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1536', '2048', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'anweisungen',
                            symbolName: 'anweisungen',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1536', '2048', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'text_sophronia',
                            symbolName: 'text_sophronia',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1536', '2048', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'sophronia_titelseite',
                            symbolName: 'sophronia_titel',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '0', '1536', '2048', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'untertitel',
                            symbolName: 'untertitel',
                            display: 'none',
                            type: 'rect',
                            rect: ['287', '1008', '1000', '101', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'sophronia_ueberschrift',
                            symbolName: 'sophronia_schrift',
                            display: 'none',
                            type: 'rect',
                            rect: ['408', '754', '825', '188', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1536', '2048', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: false,
                    labels: {
                        "titel_einblenden": 2000,
                        "anweisung_einblenden": 12523,
                        "app_starten": 20000
                    },
                    data: [
                        [
                            "eid1360",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text_sophronia}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1361",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${text_sophronia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1349",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${text_sophronia}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1345",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${sophronia_titelseite}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1324",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sophronia_ueberschrift}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1326",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${sophronia_ueberschrift}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1343",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${sophronia_ueberschrift}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1325",
                            "display",
                            0,
                            0,
                            "linear",
                            "${untertitel}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1327",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${untertitel}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1344",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${untertitel}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1338",
                            "opacity",
                            4500,
                            2000,
                            "linear",
                            "${sophronia_titelseite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${anweisungen}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1356",
                            "display",
                            12523,
                            0,
                            "linear",
                            "${anweisungen}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1355",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${anweisungen}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1353",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${anweisungen}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1331",
                            "opacity",
                            2000,
                            989,
                            "linear",
                            "${sophronia_ueberschrift}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1342",
                            "opacity",
                            4500,
                            2000,
                            "linear",
                            "${sophronia_ueberschrift}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1358",
                            "display",
                            0,
                            0,
                            "linear",
                            "${stadtrotation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1359",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${stadtrotation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1367",
                            "opacity",
                            4500,
                            2000,
                            "linear",
                            "${text_sophronia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1348",
                            "opacity",
                            12523,
                            1477,
                            "linear",
                            "${text_sophronia}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1371",
                            "opacity",
                            12523,
                            1477,
                            "linear",
                            "${anweisungen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1352",
                            "opacity",
                            20000,
                            1000,
                            "linear",
                            "${anweisungen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            2989,
                            989,
                            "linear",
                            "${untertitel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1340",
                            "opacity",
                            4500,
                            2000,
                            "linear",
                            "${untertitel}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "stadtrotation": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'stadt-zwei-seiten',
                            rect: ['0', '0', '1536', '2048', 'auto', 'auto'],
                            type: 'group',
                            c: [
                            {
                                rect: ['0', '0', 1536, 2048, 'auto', 'auto'],
                                display: 'block',
                                symbolName: 'stadt-bunt',
                                type: 'rect',
                                id: 'stadt-bunt'
                            },
                            {
                                transform: [[0, 0, 0], ['180deg', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                                type: 'rect',
                                display: 'none',
                                id: 'stadt-grau',
                                opacity: '0',
                                symbolName: 'stadt-grau',
                                rect: ['0', '0', 1536, 2048, 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: false,
                    labels: {
                        "anfang": 0,
                        "bunt-grau-UZ": 250,
                        "grau-bunt-UZ": 2000
                    },
                    data: [
                        [
                            "eid7",
                            "opacity",
                            250,
                            1250,
                            "linear",
                            "${stadt-grau}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2000,
                            1250,
                            "linear",
                            "${stadt-grau}",
                            '1',
                            '0'
                        ],
                        [
                            "eid247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${stadt-grau}",
                            'none',
                            'none'
                        ],
                        [
                            "eid250",
                            "display",
                            250,
                            0,
                            "easeInOutQuad",
                            "${stadt-grau}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${stadt-grau}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "rotateZ",
                            250,
                            1250,
                            "easeInOutQuad",
                            "${stadt-zwei-seiten}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            2000,
                            1250,
                            "easeInOutQuad",
                            "${stadt-zwei-seiten}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid245",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${stadt-bunt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid248",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${stadt-bunt}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "stadt-bunt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'stadtelemente',
                            rect: [0, -82, '1672', '2130', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'rand',
                                symbolName: 'rand',
                                rect: ['21', 682, 1486, 1235, 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'png_buntestadt',
                                symbolName: 'png_buntestadt',
                                rect: ['0', 82, 1536, 2048, 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'rummel',
                                symbolName: 'rummel',
                                rect: ['127', '0', 1545, 1707, 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'spielsalon23',
                                rect: [504, 1184, 167, 297, 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/spielsalon2.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'enter',
                                symbolName: 'enter',
                                rect: [591, 1184, 84, 224, 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'but-raum-rot',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['438px', 1006, 342, 400, 'auto', 'auto'],
                            display: 'block',
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0', '0', 1536, 2048, 'auto', 'auto'],
                            type: 'rect',
                            id: 'raum_rot',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'raum_rot'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 45000,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "raum-rot": 5000,
                        "hide-raum-rot": 11000
                    },
                    data: [
                        [
                            "eid1012",
                            "left",
                            5000,
                            3000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '0px',
                            '978px'
                        ],
                        [
                            "eid1022",
                            "left",
                            11000,
                            0,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '978px',
                            '0px'
                        ],
                        [
                            "eid1013",
                            "top",
                            5000,
                            3000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '-82px',
                            '-1231px'
                        ],
                        [
                            "eid1019",
                            "top",
                            11000,
                            0,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '-1231px',
                            '-82px'
                        ],
                        [
                            "eid1298",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${raum_rot}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1299",
                            "display",
                            8000,
                            0,
                            "easeInOutQuad",
                            "${raum_rot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1307",
                            "display",
                            11750,
                            0,
                            "easeInOutQuad",
                            "${raum_rot}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1014",
                            "display",
                            5015,
                            0,
                            "easeInOutQuad",
                            "${but-raum-rot}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1010",
                            "scaleX",
                            5000,
                            3000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '1',
                            '4'
                        ],
                        [
                            "eid1020",
                            "scaleX",
                            11000,
                            0,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '4',
                            '1'
                        ],
                        [
                            "eid1303",
                            "opacity",
                            8000,
                            750,
                            "easeInOutQuad",
                            "${raum_rot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1306",
                            "opacity",
                            11000,
                            750,
                            "easeInOutQuad",
                            "${raum_rot}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1011",
                            "scaleY",
                            5000,
                            3000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '1',
                            '4'
                        ],
                        [
                            "eid1021",
                            "scaleY",
                            11000,
                            0,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '4',
                            '1'
                        ]
                    ]
                }
            },
            "stadt-grau": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'stadtelemente',
                            rect: [0, 0, '1536', '2048', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[0, 0, 0], ['0deg', 0, 0], [0, 0], ['1', 1, 1], ['50%', '50%']],
                                type: 'image',
                                id: 'grauestadt_oben2',
                                opacity: '1',
                                rect: [0, 0, '1536px', '2048px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/grauestadt_oben.jpg', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'riesenrad',
                                symbolName: 'riesenrad',
                                rect: [110, 1249, 658, 681, 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'riesenrad_leuchten',
                                symbolName: 'riesenrad_leuchten',
                                rect: [-77, 1059, 1031, 1059, 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                id: 'boden_grau',
                                rect: [62, 650, '1390px', '878px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/boden_grau.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'haeuser',
                                symbolName: 'haeuser',
                                rect: ['130', '49', 1345, 1534, 'auto', 'auto']
                            },
                            {
                                type: 'image',
                                transform: [[0, 0, 0], ['-7deg', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                                rect: [674, 693, 43, 62, 'auto', 'auto'],
                                id: 'Gesicht_Augenzu',
                                opacity: '0',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/Gesicht_Augenzu.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'zaun',
                                rect: [978, 1147, '356px', '373px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/zaun.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'but-reiterstandbild',
                            opacity: '0',
                            rect: [593, 650, 242, 353, 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: [923, 289, 242, 443, 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'but-raum-grau',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['1', '0', 1536, 2048, 'auto', 'auto'],
                            type: 'rect',
                            id: 'raum_grau',
                            opacity: '0',
                            display: 'none',
                            symbolName: 'raum_grau1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 51400,
                    autoPlay: false,
                    labels: {
                        "start 2": 0,
                        "raum_grau": 3000,
                        "start": 3000,
                        "hide_raum_grau": 7250,
                        "reiterstandbild_zoom": 12000
                    },
                    data: [
                        [
                            "eid1255",
                            "width",
                            0,
                            0,
                            "linear",
                            "${but-raum-grau}",
                            '242px',
                            '242px'
                        ],
                        [
                            "eid1049",
                            "scaleY",
                            3000,
                            2000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '1',
                            '3.5'
                        ],
                        [
                            "eid1070",
                            "scaleY",
                            7250,
                            0,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '3.5',
                            '1'
                        ],
                        [
                            "eid1197",
                            "scaleY",
                            12000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '1',
                            '4'
                        ],
                        [
                            "eid1214",
                            "scaleY",
                            17000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2021",
                            "opacity",
                            14250,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2022",
                            "opacity",
                            14500,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1991",
                            "opacity",
                            14750,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1995",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1994",
                            "opacity",
                            15250,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1997",
                            "opacity",
                            16128,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1998",
                            "opacity",
                            16378,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1999",
                            "opacity",
                            16628,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2000",
                            "opacity",
                            16878,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2076",
                            "top",
                            0,
                            0,
                            "linear",
                            "${riesenrad}",
                            '1249px',
                            '1249px'
                        ],
                        [
                            "eid1053",
                            "top",
                            3000,
                            2000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '0px',
                            '1679px'
                        ],
                        [
                            "eid1201",
                            "top",
                            7250,
                            0,
                            "linear",
                            "${stadtelemente}",
                            '1679px',
                            '0px'
                        ],
                        [
                            "eid1207",
                            "top",
                            12000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '0px',
                            '854px'
                        ],
                        [
                            "eid1212",
                            "top",
                            17000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '854px',
                            '0px'
                        ],
                        [
                            "eid1025",
                            "display",
                            3000,
                            0,
                            "easeInOutQuad",
                            "${but-raum-grau}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1864",
                            "display",
                            0,
                            0,
                            "linear",
                            "${raum_grau}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1865",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${raum_grau}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1873",
                            "display",
                            7750,
                            0,
                            "linear",
                            "${raum_grau}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1048",
                            "scaleX",
                            3000,
                            2000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '1',
                            '3.5'
                        ],
                        [
                            "eid1068",
                            "scaleX",
                            7250,
                            0,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '3.5',
                            '1'
                        ],
                        [
                            "eid1196",
                            "scaleX",
                            12000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '1',
                            '4'
                        ],
                        [
                            "eid2003",
                            "scaleX",
                            14250,
                            0,
                            "linear",
                            "${stadtelemente}",
                            '4',
                            '4'
                        ],
                        [
                            "eid1213",
                            "scaleX",
                            17000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2059",
                            "left",
                            0,
                            0,
                            "linear",
                            "${riesenrad}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid2040",
                            "left",
                            14250,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid1052",
                            "left",
                            3000,
                            2000,
                            "easeInOutQuad",
                            "${stadtelemente}",
                            '0px',
                            '-986px'
                        ],
                        [
                            "eid1200",
                            "left",
                            7250,
                            0,
                            "linear",
                            "${stadtelemente}",
                            '-986px',
                            '0px'
                        ],
                        [
                            "eid1206",
                            "left",
                            12000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '0px',
                            '122px'
                        ],
                        [
                            "eid1215",
                            "left",
                            17000,
                            2250,
                            "linear",
                            "${stadtelemente}",
                            '122px',
                            '0px'
                        ],
                        [
                            "eid1141",
                            "scaleX",
                            12000,
                            0,
                            "linear",
                            "${zaun}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2069",
                            "left",
                            0,
                            0,
                            "linear",
                            "${riesenrad_leuchten}",
                            '-77px',
                            '-77px'
                        ],
                        [
                            "eid1145",
                            "scaleY",
                            12000,
                            0,
                            "linear",
                            "${zaun}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1254",
                            "left",
                            0,
                            0,
                            "linear",
                            "${but-raum-grau}",
                            '923px',
                            '923px'
                        ],
                        [
                            "eid2047",
                            "width",
                            14250,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid1142",
                            "scaleX",
                            12000,
                            0,
                            "linear",
                            "${haeuser}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2075",
                            "top",
                            0,
                            0,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1059px',
                            '1059px'
                        ],
                        [
                            "eid2045",
                            "top",
                            14250,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '693px',
                            '693px'
                        ],
                        [
                            "eid1143",
                            "scaleX",
                            12000,
                            0,
                            "linear",
                            "${grauestadt_oben2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1982",
                            "display",
                            14250,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1146",
                            "scaleY",
                            12000,
                            0,
                            "linear",
                            "${haeuser}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2044",
                            "height",
                            14250,
                            0,
                            "linear",
                            "${Gesicht_Augenzu}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid1256",
                            "height",
                            0,
                            0,
                            "linear",
                            "${but-raum-grau}",
                            '443px',
                            '443px'
                        ],
                        [
                            "eid1147",
                            "scaleY",
                            12000,
                            0,
                            "linear",
                            "${grauestadt_oben2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1869",
                            "opacity",
                            5000,
                            1250,
                            "linear",
                            "${raum_grau}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1872",
                            "opacity",
                            7250,
                            500,
                            "linear",
                            "${raum_grau}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "hau2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'haus22',
                            opacity: '1',
                            rect: [0, 0, '412px', '672px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haus2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 412, 672]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "haus1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'haus12',
                            rect: [0, 0, '392px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haus1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 392, 524]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bank": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bank',
                            rect: [0, 0, 597, 593, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bank.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 597, 593]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "schule": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'schule',
                            rect: [0, 0, 484, 582, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/schule.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 484, 582]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "marmordunkel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'marmordunkel',
                            rect: [0, 0, '312px', '628px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marmordunkel.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 312, 628]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "fabrik": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fabrik',
                            rect: [0, 0, '372px', '468px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fabrik.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 372, 468]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "schwarzeshaus": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'schwarzeshaus',
                            rect: [43, 77, 243, 416, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/kopie11.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 312, 536]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "riesenhaus": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'riesenhaus',
                            rect: [0, 0, 456, 740, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/riesenhaus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 456, 740]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "marmorhell": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'marmorhell',
                            rect: [0, 0, '212px', '516px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marmorhell.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 212, 516]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "riesenrad": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'Riesenrad1',
                            type: 'image',
                            rect: [0, 0, 658, 681, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Riesenrad%281%29.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 658, 681]
                        }
                    }
                },
                timeline: {
                    duration: 45000,
                    autoPlay: true,
                    labels: {
                        "rotation": 0
                    },
                    data: [
                        [
                            "eid15",
                            "rotateZ",
                            0,
                            45000,
                            "linear",
                            "${Riesenrad1}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "haeuser": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [360, 0, 456, 740, 'auto', 'auto'],
                            id: 'riesenhaus2',
                            symbolName: 'riesenhaus',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            type: 'image',
                            id: 'hinterm_fenster',
                            opacity: '1',
                            rect: ['915', 348, 28, 38, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hinterm_fenster.png', '0px', '0px']
                        },
                        {
                            rect: [915, 351, 28, 32, 'auto', 'auto'],
                            id: 'fenster2',
                            symbolName: 'fenster',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [751, 187, 312, 536, 'auto', 'auto'],
                            id: 'schwarzeshaus2',
                            symbolName: 'schwarzeshaus',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            type: 'image',
                            id: 'bauhaus',
                            opacity: '1',
                            rect: [921, 262, '424px', '584px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bauhaus.png', '0px', '0px']
                        },
                        {
                            rect: [1027, 484, 212, 516, 'auto', 'auto'],
                            id: 'marmorhell2',
                            symbolName: 'marmorhell',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [833, 683, 372, 468, 'auto', 'auto'],
                            id: 'fabrik2',
                            symbolName: 'fabrik',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            type: 'rect',
                            id: 'reiterstandbild',
                            symbolName: 'reiterstandbild',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.92233', '0.92233', 1], ['50%', '50%']],
                            rect: [487, 601, 195, 329, 'auto', 'auto']
                        },
                        {
                            rect: [106, 487, 312, 628, 'auto', 'auto'],
                            id: 'marmordunkel2',
                            symbolName: 'marmordunkel',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [554, 889, 484, 582, 'auto', 'auto'],
                            id: 'schule2',
                            symbolName: 'schule',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [222, 573, 597, 593, 'auto', 'auto'],
                            id: 'bank2',
                            symbolName: 'bank',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [0, 1010, 392, 524, 'auto', 'auto'],
                            id: 'haus1',
                            symbolName: 'haus1',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [234, 783, 412, 672, 'auto', 'auto'],
                            id: 'haus2',
                            symbolName: 'hau2',
                            type: 'rect',
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1345, 1534]
                        }
                    }
                },
                timeline: {
                    duration: 51400,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "opacity",
                            18000,
                            2000,
                            "easeInQuint",
                            "${riesenhaus2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid962",
                            "opacity",
                            30750,
                            2000,
                            "easeInQuint",
                            "${riesenhaus2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            8000,
                            2000,
                            "easeInQuint",
                            "${bank2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid955",
                            "opacity",
                            40750,
                            2000,
                            "easeInQuint",
                            "${bank2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            3000,
                            2000,
                            "easeInQuint",
                            "${haus1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid954",
                            "opacity",
                            45750,
                            2000,
                            "easeInQuint",
                            "${haus1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            13000,
                            2000,
                            "easeInQuint",
                            "${fabrik2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid958",
                            "opacity",
                            35750,
                            2000,
                            "easeInQuint",
                            "${fabrik2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            10500,
                            2000,
                            "easeInQuint",
                            "${marmordunkel2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid957",
                            "opacity",
                            38250,
                            2000,
                            "easeInQuint",
                            "${marmordunkel2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2015",
                            "left",
                            0,
                            0,
                            "linear",
                            "${reiterstandbild}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid2010",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${reiterstandbild}",
                            '0.92233',
                            '0.92233'
                        ],
                        [
                            "eid1115",
                            "opacity",
                            20500,
                            2000,
                            "easeInQuint",
                            "${fenster2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1126",
                            "opacity",
                            28250,
                            2000,
                            "easeInQuint",
                            "${fenster2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            23000,
                            2000,
                            "easeInQuint",
                            "${bauhaus}",
                            '1',
                            '0'
                        ],
                        [
                            "eid960",
                            "opacity",
                            25750,
                            2000,
                            "easeInQuint",
                            "${bauhaus}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2011",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${reiterstandbild}",
                            '0.92233',
                            '0.92233'
                        ],
                        [
                            "eid48",
                            "opacity",
                            20500,
                            2000,
                            "easeInQuint",
                            "${schwarzeshaus2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid961",
                            "opacity",
                            28250,
                            2000,
                            "easeInQuint",
                            "${schwarzeshaus2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2013",
                            "top",
                            0,
                            0,
                            "linear",
                            "${reiterstandbild}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1118",
                            "opacity",
                            20500,
                            2000,
                            "easeInQuint",
                            "${hinterm_fenster}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1127",
                            "opacity",
                            28250,
                            2000,
                            "easeInQuint",
                            "${hinterm_fenster}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            500,
                            2000,
                            "linear",
                            "${haus2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid953",
                            "opacity",
                            48250,
                            2000,
                            "linear",
                            "${haus2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1086",
                            "top",
                            0,
                            0,
                            "linear",
                            "${schwarzeshaus2}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid1085",
                            "left",
                            0,
                            0,
                            "linear",
                            "${schwarzeshaus2}",
                            '751px',
                            '751px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            15500,
                            2000,
                            "easeInQuint",
                            "${marmorhell2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid959",
                            "opacity",
                            33250,
                            2000,
                            "easeInQuint",
                            "${marmorhell2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            5500,
                            2000,
                            "easeInQuint",
                            "${schule2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid956",
                            "opacity",
                            43250,
                            2000,
                            "easeInQuint",
                            "${schule2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "png_buntestadt": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bunte-stadt_oben',
                            rect: [0, 0, '1536px', '2048px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bunte-stadt_oben.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "haus_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'haus1',
                            rect: [0, 0, '392px', '524px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/haus1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 392, 524]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Fabrik": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fabrik',
                            rect: [0, 0, '372px', '468px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['180', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/fabrik.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 372, 468]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Riesenhaus": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'riesenhaus',
                            type: 'image',
                            rect: [0, 0, '468px', '760px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/riesenhaus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 468, 760]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Bauhaus": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bauhaus',
                            rect: [0, 0, '424px', '584px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bauhaus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 424, 584]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Schwarzeshaus": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'schwarzeshaus',
                            rect: [0, 0, '352px', '604px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/schwarzeshaus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 352, 604]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Marmordunkel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'marmordunkel',
                            rect: [0, 0, '312px', '628px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marmordunkel.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 312, 628]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Klotz": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Klotz2',
                            type: 'image',
                            rect: [0, 0, 77, 122, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Klotz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 77, 122]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "gesicht_augenzu": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Gesicht_Augenzu',
                            type: 'image',
                            rect: [0, 0, 118, 170, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Gesicht_Augenzu.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 118, 170]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "gesicht": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Gesicht',
                            type: 'image',
                            rect: [0, 0, 118, 169, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Gesicht.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 118, 169]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "kopf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'gesicht_augenzu',
                            type: 'rect',
                            rect: [0, 0, 118, 170, 'auto', 'auto'],
                            symbolName: 'gesicht_augenzu'
                        },
                        {
                            rect: [0, 0, 118, 169, 'auto', 'auto'],
                            type: 'rect',
                            id: 'gesicht',
                            opacity: '1',
                            display: 'block',
                            symbolName: 'gesicht'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 118, 170]
                        }
                    }
                },
                timeline: {
                    duration: 29278,
                    autoPlay: true,
                    data: [
                        [
                            "eid82",
                            "opacity",
                            28154,
                            193,
                            "easeInBack",
                            "${gesicht}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "opacity",
                            28347,
                            139,
                            "easeInBack",
                            "${gesicht}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "opacity",
                            28946,
                            193,
                            "easeInBack",
                            "${gesicht}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            29139,
                            139,
                            "easeInBack",
                            "${gesicht}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "top",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht_augenzu}",
                            '0px',
                            '-221px'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht}",
                            '1',
                            '3.59322'
                        ],
                        [
                            "eid74",
                            "top",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht}",
                            '0px',
                            '-219px'
                        ],
                        [
                            "eid87",
                            "display",
                            29000,
                            0,
                            "easeInBack",
                            "${gesicht}",
                            'block',
                            'block'
                        ],
                        [
                            "eid73",
                            "left",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht}",
                            '0px',
                            '-8px'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht}",
                            '1',
                            '3.59322'
                        ],
                        [
                            "eid79",
                            "scaleX",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht_augenzu}",
                            '1',
                            '3.59322'
                        ],
                        [
                            "eid78",
                            "left",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht_augenzu}",
                            '0px',
                            '-8px'
                        ],
                        [
                            "eid77",
                            "scaleY",
                            22000,
                            6154,
                            "easeInBack",
                            "${gesicht_augenzu}",
                            '1',
                            '3.59322'
                        ]
                    ]
                }
            },
            "Korb": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 68, '71px', '72px', 'auto', 'auto'],
                            filter: ['0', '0deg', '0.90768229166667', '1', '0', '0', '0.020377604166667', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fi: ['0', '0deg', '0.90768229166667', '1', '0', '0', '0.020377604166667', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'Korb',
                            type: 'image',
                            transform: [[0, 0, 0], [0, 0, 0], ['0deg', '0deg'], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/Korb.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 71, 72]
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: true,
                    data: [
                        [
                            "eid386",
                            "filter.grayscale",
                            0,
                            0,
                            "easeInQuint",
                            "${Korb}",
                            '0.020377604166667',
                            '0.020377604166667'
                        ],
                        [
                            "eid388",
                            "filter.invert",
                            0,
                            0,
                            "easeInQuint",
                            "${Korb}",
                            '0',
                            '0'
                        ],
                        [
                            "eid205",
                            "top",
                            0,
                            4000,
                            "easeInQuad",
                            "${Korb}",
                            '68px',
                            '-90px'
                        ],
                        [
                            "eid206",
                            "top",
                            4000,
                            1000,
                            "easeInQuad",
                            "${Korb}",
                            '-90px',
                            '2px'
                        ],
                        [
                            "eid207",
                            "top",
                            5000,
                            1500,
                            "easeInQuad",
                            "${Korb}",
                            '2px',
                            '68px'
                        ],
                        [
                            "eid194",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Korb}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid389",
                            "filter.contrast",
                            0,
                            0,
                            "easeInQuint",
                            "${Korb}",
                            '0.90768229166667',
                            '0.90768229166667'
                        ]
                    ]
                }
            },
            "Spiegelei": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Spiegelei',
                            rect: ['-3px', '22px', '139px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Spiegelei.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 139, 54]
                        }
                    }
                },
                timeline: {
                    duration: 28000,
                    autoPlay: true,
                    data: [
                        [
                            "eid253",
                            "location",
                            0,
                            7000,
                            "easeInOutCirc",
                            "${Spiegelei}",
                            [[66.54, 49.22, 0, 0, 0, 0,0],[-458.17, 400.14, -517.15, -388.67, -609.97, -458.43,689.76],[-260.15, -54.43, 0, 0, 0, 0,1242.72]]
                        ],
                        [
                            "eid254",
                            "location",
                            7000,
                            6000,
                            "easeInOutCirc",
                            "${Spiegelei}",
                            [[-260.15, -54.43, 0, 0, 0, 0,0],[-102.45, -253.11, 647.08, -61.46, 572.27, -54.36,289.43],[67.42, 21.23, 0, 0, 0, 0,669.58]]
                        ],
                        [
                            "eid255",
                            "location",
                            13000,
                            7000,
                            "easeInOutCirc",
                            "${Spiegelei}",
                            [[67.42, 21.23, 0, 0, 0, 0,0],[176.48, -393.12, 691.21, -118.12, 588.6, -100.59,473.03],[314.32, -102.87, 0, 0, 0, 0,871.88]]
                        ],
                        [
                            "eid256",
                            "location",
                            20000,
                            8000,
                            "easeInOutCirc",
                            "${Spiegelei}",
                            [[314.32, -102.87, 0, 0, 0, 0,0],[331.66, 192.62, -414.35, 93.53, -688.74, 155.46,384.58],[79.12, 49.14, 0, 0, 0, 0,691.71]]
                        ]
                    ]
                }
            },
            "Ball": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Ball2',
                            rect: ['0px', '0px', 24, 26, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Ball2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 24, 26]
                        }
                    }
                },
                timeline: {
                    duration: 18000,
                    autoPlay: true,
                    data: [
                        [
                            "eid260",
                            "location",
                            0,
                            13760,
                            "easeInQuad",
                            "${Ball2}",
                            [[12, 13, 0, 0, 0, 0,0],[72.55, 34.22, -47.66, 64.33, -76.65, 103.46,82.68],[-8.45, 82.27, -74.03, 65.96, -95.15, 84.79,177.65],[22.52, 153.31, -22.05, 64.13, -45.66, 132.8,265.63],[-141.04, 179.28, -79.72, -46.16, -120.86, -69.97,438.43],[-12.2, 174.15, 32.27, 8.11, 252.76, 63.52,585.4],[-152.01, 223.49, -10.01, -0.38, -589.75, -22.59,771.68],[-196.92, 302.11, -7.75, 26.54, -50.76, 173.9,863.91],[-230.44, 280.32, -123.94, 20.56, -55.9, 9.28,907.27],[-281.19, 323.67, -4.83, 0.71, -12.52, 1.83,977.1],[-353.64, 250.61, -122.12, 4.38, -166.64, 5.98,1087.92],[-423.56, 317.86, -2.85, -6.33, -0.23, -0.51,1189.06],[-481.68, 280.47, -108.44, 13.73, -125.67, 15.91,1263.61],[-552.79, 326.21, 0, 0, 0, 0,1349.69],[-650.43, 346.01, 0, 0, 0, 0,1449.32]]
                        ],
                        [
                            "eid939",
                            "location",
                            13760,
                            1240,
                            "easeInQuad",
                            "${Ball2}",
                            [[-650.43, 346.01, -16.38, 2.88, 0, 0,0],[-666.87, 348.87, -7.87, 1.36, -16.43, 2.83,16.69],[-667, 954.38, 0, 0, 0, 0,622.22]]
                        ]
                    ]
                }
            },
            "Splash": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Splash14',
                            type: 'image',
                            rect: [66, 449, 168, 29, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Splash1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 331, 682]
                        }
                    }
                },
                timeline: {
                    duration: 18000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Splash_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Splash14',
                            rect: [36, 653, 273, 29, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Splash12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 331, 682]
                        }
                    }
                },
                timeline: {
                    duration: 18000,
                    autoPlay: true,
                    data: [
                        [
                            "eid352",
                            "top",
                            11250,
                            585,
                            "easeInQuint",
                            "${Splash14}",
                            '653px',
                            '0px'
                        ],
                        [
                            "eid357",
                            "top",
                            12125,
                            875,
                            "easeOutQuint",
                            "${Splash14}",
                            '0px',
                            '653px'
                        ],
                        [
                            "eid351",
                            "height",
                            11250,
                            585,
                            "easeInQuint",
                            "${Splash14}",
                            '29px',
                            '682px'
                        ],
                        [
                            "eid355",
                            "height",
                            12125,
                            875,
                            "easeOutQuint",
                            "${Splash14}",
                            '681px',
                            '29px'
                        ]
                    ]
                }
            },
            "Geist": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Geist',
                            opacity: '0.2',
                            rect: [0, 0, 352, 374, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Geist.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 352, 374]
                        }
                    }
                },
                timeline: {
                    duration: 12000,
                    autoPlay: true,
                    data: [
                        [
                            "eid228",
                            "height",
                            0,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '374px',
                            '773px'
                        ],
                        [
                            "eid238",
                            "height",
                            6000,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '773px',
                            '374px'
                        ],
                        [
                            "eid221",
                            "opacity",
                            0,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid246",
                            "opacity",
                            6000,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '1',
                            '0.2'
                        ],
                        [
                            "eid231",
                            "top",
                            0,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '0px',
                            '-399px'
                        ],
                        [
                            "eid239",
                            "top",
                            6000,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '-399px',
                            '0px'
                        ],
                        [
                            "eid230",
                            "width",
                            0,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '352px',
                            '727px'
                        ],
                        [
                            "eid240",
                            "width",
                            6000,
                            6000,
                            "easeInOutCirc",
                            "${Geist}",
                            '727px',
                            '352px'
                        ]
                    ]
                }
            },
            "diamant": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Diamant',
                            rect: ['-5px', '0px', '68px', '109px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Diamant%2018.42.49.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 68, 109]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid203",
                            "location",
                            0,
                            4000,
                            "linear",
                            "${Diamant}",
                            [[29.42, 54.5, 0, 0, 0, 0,0],[-196.85, -233.75, -524.6, 94.02, -798.57, 143.12,439.98],[-387.73, 157.21, 0, 0, 0, 0,902.7]]
                        ],
                        [
                            "eid208",
                            "location",
                            4000,
                            4000,
                            "linear",
                            "${Diamant}",
                            [[-387.73, 157.21, 0, 0, 0, 0,0],[-190.42, -189.43, 684.17, -161.27, 553.32, -130.43,425.05],[33.72, 54.8, 0, 0, 0, 0,816.94]]
                        ]
                    ]
                }
            },
            "raum-rot": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "reiter": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'reiter',
                            type: 'image',
                            rect: [0, 0, 186, 295, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/reiter.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 186, 295]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "rand": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [1094, 0, 392, 524, 'auto', 'auto'],
                            id: 'haus_1',
                            symbolName: 'haus_1',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [1039, 257, 372, 468, 'auto', 'auto'],
                            id: 'Fabrik',
                            symbolName: 'Fabrik',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [938, 411, 312, 628, 'auto', 'auto'],
                            id: 'Marmordunkel',
                            symbolName: 'Marmordunkel',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [551, 475, 468, 760, 'auto', 'auto'],
                            id: 'Riesenhaus',
                            symbolName: 'Riesenhaus',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [0, 556, 424, 584, 'auto', 'auto'],
                            id: 'Bauhaus',
                            symbolName: 'Bauhaus',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [264, 573, 352, 604, 'auto', 'auto'],
                            id: 'Schwarzeshaus',
                            symbolName: 'Schwarzeshaus',
                            type: 'rect',
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1486, 1235]
                        }
                    }
                },
                timeline: {
                    duration: 670,
                    autoPlay: true,
                    data: [
                        [
                            "eid63",
                            "top",
                            0,
                            0,
                            "linear",
                            "${haus_1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid289",
                            "opacity",
                            112,
                            21,
                            "linear",
                            "${Fabrik}",
                            '1',
                            '0'
                        ],
                        [
                            "eid989",
                            "opacity",
                            462,
                            30,
                            "linear",
                            "${Fabrik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid307",
                            "opacity",
                            218,
                            21,
                            "linear",
                            "${Bauhaus}",
                            '1',
                            '0'
                        ],
                        [
                            "eid986",
                            "opacity",
                            300,
                            26,
                            "linear",
                            "${Bauhaus}",
                            '0',
                            '1'
                        ],
                        [
                            "eid285",
                            "opacity",
                            87,
                            17,
                            "linear",
                            "${Marmordunkel}",
                            '1',
                            '0'
                        ],
                        [
                            "eid988",
                            "opacity",
                            501,
                            18,
                            "linear",
                            "${Marmordunkel}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Fabrik}",
                            '257px',
                            '257px'
                        ],
                        [
                            "eid279",
                            "opacity",
                            23,
                            16,
                            "linear",
                            "${haus_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid990",
                            "opacity",
                            578,
                            26,
                            "linear",
                            "${haus_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Fabrik}",
                            '1039px',
                            '1039px'
                        ],
                        [
                            "eid64",
                            "left",
                            0,
                            0,
                            "linear",
                            "${haus_1}",
                            '1094px',
                            '1094px'
                        ],
                        [
                            "eid292",
                            "opacity",
                            159,
                            17,
                            "linear",
                            "${Riesenhaus}",
                            '1',
                            '0'
                        ],
                        [
                            "eid987",
                            "opacity",
                            390,
                            32,
                            "linear",
                            "${Riesenhaus}",
                            '0',
                            '1'
                        ],
                        [
                            "eid295",
                            "opacity",
                            185,
                            20,
                            "linear",
                            "${Schwarzeshaus}",
                            '1',
                            '0'
                        ],
                        [
                            "eid985",
                            "opacity",
                            356,
                            24,
                            "linear",
                            "${Schwarzeshaus}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "amusement": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            loop: 'loop',
                            source: ['media/Amusemen-J_Fairba-8432_hifi.mp3'],
                            volume: '0.200000',
                            id: 'Amusement',
                            rect: [332, 747, '320px', '45px', 'auto', 'auto'],
                            type: 'audio',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 0, 0]
                        }
                    }
                },
                timeline: {
                    duration: 33463,
                    autoPlay: false,
                    data: [
                        [
                            "eid313",
                            "volume",
                            0,
                            4000,
                            "linear",
                            "${Amusement}",
                            '0.200000',
                            '0.5'
                        ],
                        [
                            "eid317",
                            "volume",
                            4000,
                            29463,
                            "linear",
                            "${Amusement}",
                            '0.500000',
                            '0.2'
                        ]
                    ]
                }
            },
            "rauch": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'rauch2Copy',
                            opacity: '1',
                            rect: [160, 309, 14, 22, 'auto', 'auto'],
                            filter: ['0', '0deg', '1', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            display: 'none',
                            fi: ['0', '0deg', '1', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fill: ['rgba(0,0,0,0)', 'images/rauch.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rauch2',
                            opacity: '1',
                            rect: [159, 311, 10, 16, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rauch.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 181, 285]
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: true,
                    data: [
                        [
                            "eid449",
                            "left",
                            4000,
                            6000,
                            "linear",
                            "${rauch2Copy}",
                            '160px',
                            '-268px'
                        ],
                        [
                            "eid2058",
                            "opacity",
                            4000,
                            6000,
                            "linear",
                            "${rauch2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid418",
                            "top",
                            0,
                            8000,
                            "linear",
                            "${rauch2}",
                            '311px',
                            '-528px'
                        ],
                        [
                            "eid2051",
                            "opacity",
                            0,
                            8000,
                            "linear",
                            "${rauch2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid420",
                            "width",
                            0,
                            8000,
                            "linear",
                            "${rauch2}",
                            '10px',
                            '350px'
                        ],
                        [
                            "eid417",
                            "height",
                            0,
                            8000,
                            "linear",
                            "${rauch2}",
                            '16px',
                            '546px'
                        ],
                        [
                            "eid419",
                            "left",
                            0,
                            8000,
                            "linear",
                            "${rauch2}",
                            '159px',
                            '-290px'
                        ],
                        [
                            "eid450",
                            "width",
                            4000,
                            6000,
                            "linear",
                            "${rauch2Copy}",
                            '14px',
                            '386px'
                        ],
                        [
                            "eid446",
                            "top",
                            4000,
                            6000,
                            "linear",
                            "${rauch2Copy}",
                            '309px',
                            '-516px'
                        ],
                        [
                            "eid2053",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${rauch2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid447",
                            "height",
                            4000,
                            6000,
                            "linear",
                            "${rauch2Copy}",
                            '22px',
                            '601px'
                        ]
                    ]
                }
            },
            "riesenrad_leuchten": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'riesenrad_leuchten',
                            opacity: '1',
                            rect: [99, 137, 833, 785, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/riesenrad_leuchten.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1031, 1059]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid324",
                            "rotateZ",
                            0,
                            10000,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid604",
                            "opacity",
                            0,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid606",
                            "opacity",
                            713,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0',
                            '1'
                        ],
                        [
                            "eid608",
                            "opacity",
                            1430,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid610",
                            "opacity",
                            2144,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0',
                            '1'
                        ],
                        [
                            "eid612",
                            "opacity",
                            2857,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid614",
                            "opacity",
                            3572,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0',
                            '1'
                        ],
                        [
                            "eid615",
                            "opacity",
                            4286,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid616",
                            "opacity",
                            5001,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0',
                            '1'
                        ],
                        [
                            "eid617",
                            "opacity",
                            5716,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid618",
                            "opacity",
                            6429,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0',
                            '1'
                        ],
                        [
                            "eid619",
                            "opacity",
                            7144,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid620",
                            "opacity",
                            7860,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0',
                            '1'
                        ],
                        [
                            "eid621",
                            "opacity",
                            8573,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid622",
                            "opacity",
                            9287,
                            713,
                            "linear",
                            "${riesenrad_leuchten}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "streifen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['88', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'streifen',
                            opacity: '1',
                            rect: [-30, 33, 139, 75, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/streifen.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 80, 142]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid653",
                            "opacity",
                            0,
                            2000,
                            "swing",
                            "${streifen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid655",
                            "opacity",
                            2000,
                            2000,
                            "swing",
                            "${streifen}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "happytime": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'happytime',
                            opacity: '1',
                            rect: [-9, 9, 160, 142, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/happytime.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 142, 160]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid656",
                            "opacity",
                            0,
                            0,
                            "swing",
                            "${happytime}",
                            '1',
                            '1'
                        ],
                        [
                            "eid657",
                            "opacity",
                            1000,
                            0,
                            "swing",
                            "${happytime}",
                            '1',
                            '0'
                        ],
                        [
                            "eid658",
                            "opacity",
                            2000,
                            0,
                            "swing",
                            "${happytime}",
                            '0',
                            '1'
                        ],
                        [
                            "eid659",
                            "opacity",
                            3000,
                            0,
                            "swing",
                            "${happytime}",
                            '1',
                            '0'
                        ],
                        [
                            "eid660",
                            "opacity",
                            4000,
                            0,
                            "swing",
                            "${happytime}",
                            '0',
                            '1'
                        ],
                        [
                            "eid661",
                            "opacity",
                            5000,
                            0,
                            "swing",
                            "${happytime}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "action": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'action',
                            rect: [25, -18, 63, 105, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/action.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 200, 332]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid686",
                            "width",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '63px',
                            '86px'
                        ],
                        [
                            "eid683",
                            "height",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '105px',
                            '144px'
                        ],
                        [
                            "eid684",
                            "top",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '-18px',
                            '-47px'
                        ],
                        [
                            "eid685",
                            "left",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '25px',
                            '14px'
                        ]
                    ]
                }
            },
            "action1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'action',
                            rect: [97, -1, 62, 104, 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/action.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 200, 332]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid689",
                            "left",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '97px',
                            '92px'
                        ],
                        [
                            "eid687",
                            "height",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '104px',
                            '125px'
                        ],
                        [
                            "eid688",
                            "top",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '-1px',
                            '-17px'
                        ],
                        [
                            "eid690",
                            "width",
                            0,
                            1500,
                            "swing",
                            "${action}",
                            '62px',
                            '75px'
                        ]
                    ]
                }
            },
            "verlauf": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'verlauf',
                            opacity: '0.8',
                            rect: [34, 44, 158, 107, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/verlauf.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 500, 343]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid693",
                            "opacity",
                            0,
                            5000,
                            "linear",
                            "${verlauf}",
                            '0.8',
                            '0'
                        ],
                        [
                            "eid697",
                            "opacity",
                            5000,
                            5000,
                            "linear",
                            "${verlauf}",
                            '0',
                            '0.8'
                        ]
                    ]
                }
            },
            "peng": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-5, -1, 137, 120, 'auto', 'auto'],
                            id: 'peng',
                            transform: [[0, 0, 0], ['93', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/peng.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 428, 379]
                        }
                    }
                },
                timeline: {
                    duration: 11535,
                    autoPlay: true,
                    data: [
                        [
                            "eid701",
                            "width",
                            0,
                            0,
                            "linear",
                            "${peng}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid706",
                            "width",
                            11000,
                            0,
                            "linear",
                            "${peng}",
                            '137px',
                            '175px'
                        ],
                        [
                            "eid699",
                            "top",
                            0,
                            0,
                            "linear",
                            "${peng}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid709",
                            "top",
                            11000,
                            0,
                            "linear",
                            "${peng}",
                            '-1px',
                            '-23px'
                        ],
                        [
                            "eid698",
                            "height",
                            0,
                            0,
                            "linear",
                            "${peng}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid708",
                            "height",
                            11000,
                            0,
                            "linear",
                            "${peng}",
                            '120px',
                            '153px'
                        ],
                        [
                            "eid700",
                            "left",
                            0,
                            0,
                            "linear",
                            "${peng}",
                            '-5px',
                            '-5px'
                        ],
                        [
                            "eid707",
                            "left",
                            11000,
                            0,
                            "linear",
                            "${peng}",
                            '-5px',
                            '-32px'
                        ]
                    ]
                }
            },
            "fun_leuchten": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [44, -6, 62, 76, 'auto', 'auto'],
                            type: 'image',
                            id: 'fun_leuchten',
                            opacity: '1',
                            transform: [[0, 0, 0], ['91', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/fun_leuchten.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 123]
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    data: [
                        [
                            "eid719",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${fun_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid718",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${fun_leuchten}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "diamant_leuchten": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'diamant__leuchten',
                            opacity: '1',
                            rect: [329, -78, 130, 175, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/diamant_%20leuchten.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 222, 300]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid720",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${diamant__leuchten}",
                            '1',
                            '1'
                        ],
                        [
                            "eid722",
                            "opacity",
                            305,
                            0,
                            "linear",
                            "${diamant__leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid723",
                            "opacity",
                            7766,
                            0,
                            "linear",
                            "${diamant__leuchten}",
                            '0',
                            '0'
                        ],
                        [
                            "eid721",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${diamant__leuchten}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "auto": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [25, -20, 34, 40, 'auto', 'auto'],
                            id: 'auto',
                            transform: [[0, 0, 0], ['98', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/auto.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 100, 118]
                        }
                    }
                },
                timeline: {
                    duration: 45000,
                    autoPlay: true,
                    data: [
                        [
                            "eid756",
                            "rotateZ",
                            8500,
                            1393,
                            "linear",
                            "${auto}",
                            '98deg',
                            '156deg'
                        ],
                        [
                            "eid760",
                            "rotateZ",
                            9893,
                            253,
                            "linear",
                            "${auto}",
                            '156deg',
                            '103deg'
                        ],
                        [
                            "eid938",
                            "rotateZ",
                            35353,
                            253,
                            "linear",
                            "${auto}",
                            '103deg',
                            '156deg'
                        ],
                        [
                            "eid937",
                            "rotateZ",
                            35607,
                            1393,
                            "linear",
                            "${auto}",
                            '156deg',
                            '98deg'
                        ],
                        [
                            "eid730",
                            "left",
                            0,
                            464,
                            "linear",
                            "${auto}",
                            '25px',
                            '-7px'
                        ],
                        [
                            "eid728",
                            "left",
                            464,
                            238,
                            "linear",
                            "${auto}",
                            '25px',
                            '16px'
                        ],
                        [
                            "eid734",
                            "left",
                            702,
                            176,
                            "linear",
                            "${auto}",
                            '16px',
                            '-53px'
                        ],
                        [
                            "eid739",
                            "left",
                            878,
                            122,
                            "linear",
                            "${auto}",
                            '-53px',
                            '-81px'
                        ],
                        [
                            "eid741",
                            "left",
                            1000,
                            297,
                            "linear",
                            "${auto}",
                            '-81px',
                            '25px'
                        ],
                        [
                            "eid743",
                            "left",
                            3436,
                            1282,
                            "linear",
                            "${auto}",
                            '25px',
                            '-2px'
                        ],
                        [
                            "eid748",
                            "left",
                            4718,
                            1282,
                            "linear",
                            "${auto}",
                            '-2px',
                            '25px'
                        ],
                        [
                            "eid754",
                            "left",
                            8500,
                            1013,
                            "linear",
                            "${auto}",
                            '25px',
                            '17px'
                        ],
                        [
                            "eid757",
                            "left",
                            9513,
                            380,
                            "linear",
                            "${auto}",
                            '17px',
                            '56px'
                        ],
                        [
                            "eid761",
                            "left",
                            9893,
                            760,
                            "linear",
                            "${auto}",
                            '56px',
                            '173px'
                        ],
                        [
                            "eid763",
                            "left",
                            10653,
                            760,
                            "linear",
                            "${auto}",
                            '173px',
                            '224px'
                        ],
                        [
                            "eid765",
                            "left",
                            11413,
                            760,
                            "linear",
                            "${auto}",
                            '224px',
                            '351px'
                        ],
                        [
                            "eid767",
                            "left",
                            12173,
                            380,
                            "linear",
                            "${auto}",
                            '351px',
                            '380px'
                        ],
                        [
                            "eid769",
                            "left",
                            12553,
                            380,
                            "linear",
                            "${auto}",
                            '380px',
                            '473px'
                        ],
                        [
                            "eid771",
                            "left",
                            12933,
                            507,
                            "linear",
                            "${auto}",
                            '473px',
                            '559px'
                        ],
                        [
                            "eid773",
                            "left",
                            13440,
                            760,
                            "linear",
                            "${auto}",
                            '559px',
                            '584px'
                        ],
                        [
                            "eid775",
                            "left",
                            14200,
                            760,
                            "linear",
                            "${auto}",
                            '584px',
                            '466px'
                        ],
                        [
                            "eid777",
                            "left",
                            14960,
                            760,
                            "linear",
                            "${auto}",
                            '466px',
                            '407px'
                        ],
                        [
                            "eid785",
                            "left",
                            15720,
                            760,
                            "linear",
                            "${auto}",
                            '407px',
                            '361px'
                        ],
                        [
                            "eid787",
                            "left",
                            16480,
                            760,
                            "linear",
                            "${auto}",
                            '361px',
                            '409px'
                        ],
                        [
                            "eid789",
                            "left",
                            17240,
                            760,
                            "linear",
                            "${auto}",
                            '409px',
                            '484px'
                        ],
                        [
                            "eid936",
                            "left",
                            27500,
                            760,
                            "linear",
                            "${auto}",
                            '484px',
                            '409px'
                        ],
                        [
                            "eid935",
                            "left",
                            28260,
                            760,
                            "linear",
                            "${auto}",
                            '409px',
                            '361px'
                        ],
                        [
                            "eid934",
                            "left",
                            29020,
                            760,
                            "linear",
                            "${auto}",
                            '361px',
                            '407px'
                        ],
                        [
                            "eid933",
                            "left",
                            29780,
                            760,
                            "linear",
                            "${auto}",
                            '407px',
                            '466px'
                        ],
                        [
                            "eid932",
                            "left",
                            30540,
                            760,
                            "linear",
                            "${auto}",
                            '466px',
                            '584px'
                        ],
                        [
                            "eid931",
                            "left",
                            31300,
                            760,
                            "linear",
                            "${auto}",
                            '584px',
                            '559px'
                        ],
                        [
                            "eid930",
                            "left",
                            32060,
                            507,
                            "linear",
                            "${auto}",
                            '559px',
                            '473px'
                        ],
                        [
                            "eid929",
                            "left",
                            32567,
                            380,
                            "linear",
                            "${auto}",
                            '473px',
                            '380px'
                        ],
                        [
                            "eid928",
                            "left",
                            32947,
                            380,
                            "linear",
                            "${auto}",
                            '380px',
                            '351px'
                        ],
                        [
                            "eid927",
                            "left",
                            33327,
                            760,
                            "linear",
                            "${auto}",
                            '351px',
                            '224px'
                        ],
                        [
                            "eid926",
                            "left",
                            34087,
                            760,
                            "linear",
                            "${auto}",
                            '224px',
                            '173px'
                        ],
                        [
                            "eid925",
                            "left",
                            34847,
                            760,
                            "linear",
                            "${auto}",
                            '173px',
                            '56px'
                        ],
                        [
                            "eid924",
                            "left",
                            35607,
                            380,
                            "linear",
                            "${auto}",
                            '56px',
                            '17px'
                        ],
                        [
                            "eid923",
                            "left",
                            35987,
                            1013,
                            "linear",
                            "${auto}",
                            '17px',
                            '25px'
                        ],
                        [
                            "eid731",
                            "top",
                            0,
                            464,
                            "linear",
                            "${auto}",
                            '-20px',
                            '-12px'
                        ],
                        [
                            "eid729",
                            "top",
                            464,
                            238,
                            "linear",
                            "${auto}",
                            '-20px',
                            '59px'
                        ],
                        [
                            "eid735",
                            "top",
                            702,
                            176,
                            "linear",
                            "${auto}",
                            '59px',
                            '88px'
                        ],
                        [
                            "eid740",
                            "top",
                            878,
                            122,
                            "linear",
                            "${auto}",
                            '88px',
                            '31px'
                        ],
                        [
                            "eid742",
                            "top",
                            1000,
                            297,
                            "linear",
                            "${auto}",
                            '31px',
                            '-20px'
                        ],
                        [
                            "eid744",
                            "top",
                            3436,
                            1282,
                            "linear",
                            "${auto}",
                            '-20px',
                            '78px'
                        ],
                        [
                            "eid747",
                            "top",
                            4718,
                            1282,
                            "linear",
                            "${auto}",
                            '78px',
                            '-20px'
                        ],
                        [
                            "eid755",
                            "top",
                            8500,
                            1013,
                            "linear",
                            "${auto}",
                            '-20px',
                            '78px'
                        ],
                        [
                            "eid758",
                            "top",
                            9513,
                            380,
                            "linear",
                            "${auto}",
                            '78px',
                            '103px'
                        ],
                        [
                            "eid762",
                            "top",
                            9893,
                            760,
                            "linear",
                            "${auto}",
                            '103px',
                            '50px'
                        ],
                        [
                            "eid764",
                            "top",
                            10653,
                            760,
                            "linear",
                            "${auto}",
                            '50px',
                            '112px'
                        ],
                        [
                            "eid766",
                            "top",
                            11413,
                            760,
                            "linear",
                            "${auto}",
                            '112px',
                            '34px'
                        ],
                        [
                            "eid768",
                            "top",
                            12173,
                            380,
                            "linear",
                            "${auto}",
                            '34px',
                            '60px'
                        ],
                        [
                            "eid770",
                            "top",
                            12553,
                            380,
                            "linear",
                            "${auto}",
                            '60px',
                            '-73px'
                        ],
                        [
                            "eid772",
                            "top",
                            12933,
                            507,
                            "linear",
                            "${auto}",
                            '-73px',
                            '-102px'
                        ],
                        [
                            "eid774",
                            "top",
                            13440,
                            760,
                            "linear",
                            "${auto}",
                            '-102px',
                            '-71px'
                        ],
                        [
                            "eid776",
                            "top",
                            14200,
                            760,
                            "linear",
                            "${auto}",
                            '-71px',
                            '1px'
                        ],
                        [
                            "eid778",
                            "top",
                            14960,
                            760,
                            "linear",
                            "${auto}",
                            '1px',
                            '-20px'
                        ],
                        [
                            "eid786",
                            "top",
                            15720,
                            760,
                            "linear",
                            "${auto}",
                            '-20px',
                            '-49px'
                        ],
                        [
                            "eid788",
                            "top",
                            16480,
                            760,
                            "linear",
                            "${auto}",
                            '-49px',
                            '-97px'
                        ],
                        [
                            "eid790",
                            "top",
                            17240,
                            760,
                            "linear",
                            "${auto}",
                            '-97px',
                            '-100px'
                        ],
                        [
                            "eid922",
                            "top",
                            27500,
                            760,
                            "linear",
                            "${auto}",
                            '-100px',
                            '-97px'
                        ],
                        [
                            "eid921",
                            "top",
                            28260,
                            760,
                            "linear",
                            "${auto}",
                            '-97px',
                            '-49px'
                        ],
                        [
                            "eid920",
                            "top",
                            29020,
                            760,
                            "linear",
                            "${auto}",
                            '-49px',
                            '-20px'
                        ],
                        [
                            "eid919",
                            "top",
                            29780,
                            760,
                            "linear",
                            "${auto}",
                            '-20px',
                            '1px'
                        ],
                        [
                            "eid918",
                            "top",
                            30540,
                            760,
                            "linear",
                            "${auto}",
                            '1px',
                            '-71px'
                        ],
                        [
                            "eid917",
                            "top",
                            31300,
                            760,
                            "linear",
                            "${auto}",
                            '-71px',
                            '-102px'
                        ],
                        [
                            "eid916",
                            "top",
                            32060,
                            507,
                            "linear",
                            "${auto}",
                            '-102px',
                            '-73px'
                        ],
                        [
                            "eid915",
                            "top",
                            32567,
                            380,
                            "linear",
                            "${auto}",
                            '-73px',
                            '60px'
                        ],
                        [
                            "eid914",
                            "top",
                            32947,
                            380,
                            "linear",
                            "${auto}",
                            '60px',
                            '34px'
                        ],
                        [
                            "eid913",
                            "top",
                            33327,
                            760,
                            "linear",
                            "${auto}",
                            '34px',
                            '112px'
                        ],
                        [
                            "eid912",
                            "top",
                            34087,
                            760,
                            "linear",
                            "${auto}",
                            '112px',
                            '50px'
                        ],
                        [
                            "eid911",
                            "top",
                            34847,
                            760,
                            "linear",
                            "${auto}",
                            '50px',
                            '103px'
                        ],
                        [
                            "eid910",
                            "top",
                            35607,
                            380,
                            "linear",
                            "${auto}",
                            '103px',
                            '78px'
                        ],
                        [
                            "eid909",
                            "top",
                            35987,
                            1013,
                            "linear",
                            "${auto}",
                            '78px',
                            '-20px'
                        ]
                    ]
                }
            },
            "fenster": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fenster',
                            rect: [0, 0, 28, 32, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fenster.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 28, 32]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1121",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${fenster}",
                            '0px',
                            '-28px'
                        ],
                        [
                            "eid1123",
                            "left",
                            2000,
                            2000,
                            "linear",
                            "${fenster}",
                            '-28px',
                            '0px'
                        ]
                    ]
                }
            },
            "Gesicht_augenzu": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Gesicht_Augenzu',
                            type: 'image',
                            rect: [0, 0, 158, 228, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Gesicht_Augenzu.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 158, 228]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Gesicht_augenzu1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['-10', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'Gesicht_Augenzu2',
                            type: 'image',
                            rect: [17, 11, 142, 204, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Gesicht_Augenzu.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 175, 226]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "reiterstandbild": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'reiterstandbild',
                            rect: [0, 0, 195, 329, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/reiterstandbild.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 195, 329]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "raum_rot3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1536px', '2048px', 'auto', 'auto'],
                            type: 'image',
                            display: 'block',
                            opacity: '0',
                            id: 'raum_rot3',
                            fill: ['rgba(0,0,0,0)', 'images/raum_rot.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid1288",
                            "opacity",
                            6000,
                            1500,
                            "easeInOutQuad",
                            "${raum_rot3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1286",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${raum_rot3}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "raum_rot": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'raum_rot5',
                            rect: [0, 0, '1536px', '2048px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/raum_rot.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sophronia_titel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sophraonia_titel',
                            type: 'image',
                            rect: ['0', '0', '1536px', '2048px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/titel_zwei_seiten2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1536', '2048']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_sophronia": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'text_sophronia2',
                            type: 'image',
                            rect: ['0', '0', '1536px', '2048px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/text_sophronia2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1536', '2048']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "anweisungen": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'anweisungen_sw2',
                            rect: [0, 0, '1536px', '2048px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/anweisungen_sw2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "untertitel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'untertitel',
                            rect: [0, 0, '1000px', '101px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/untertitel.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1000, 101]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "sophronia_schrift": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'sophronia_schrift',
                            rect: [0, 0, '825px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sophronia_schrift.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 825, 188]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "enter": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['1', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'enter',
                            opacity: '1',
                            rect: [7, 0, 45, 127, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/enter.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['7', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'pfeil',
                            opacity: '1',
                            rect: [6, 62, 60, 99, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pfeil.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['1', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            rect: [6, 0, 45, 127, 'auto', 'auto'],
                            id: 'enter_rot',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/enter_rot.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 84, 224]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1796",
                            "opacity",
                            3422,
                            244,
                            "linear",
                            "${pfeil}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1798",
                            "opacity",
                            3666,
                            238,
                            "linear",
                            "${pfeil}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1804",
                            "opacity",
                            3904,
                            248,
                            "linear",
                            "${pfeil}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1806",
                            "opacity",
                            4152,
                            258,
                            "linear",
                            "${pfeil}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1810",
                            "opacity",
                            4410,
                            0,
                            "linear",
                            "${pfeil}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1767",
                            "rotateZ",
                            1606,
                            0,
                            "linear",
                            "${enter_rot}",
                            '1deg',
                            '1deg'
                        ],
                        [
                            "eid1778",
                            "rotateZ",
                            4595,
                            0,
                            "linear",
                            "${enter_rot}",
                            '1deg',
                            '1deg'
                        ],
                        [
                            "eid1753",
                            "top",
                            0,
                            408,
                            "linear",
                            "${enter_rot}",
                            '0px',
                            '-11px'
                        ],
                        [
                            "eid1759",
                            "top",
                            408,
                            397,
                            "linear",
                            "${enter_rot}",
                            '-11px',
                            '-20px'
                        ],
                        [
                            "eid1763",
                            "top",
                            805,
                            395,
                            "linear",
                            "${enter_rot}",
                            '-20px',
                            '-24px'
                        ],
                        [
                            "eid1765",
                            "top",
                            1200,
                            406,
                            "linear",
                            "${enter_rot}",
                            '-24px',
                            '-44px'
                        ],
                        [
                            "eid1783",
                            "top",
                            4595,
                            155,
                            "linear",
                            "${enter_rot}",
                            '-44px',
                            '0px'
                        ],
                        [
                            "eid1710",
                            "top",
                            0,
                            805,
                            "linear",
                            "${enter}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid1716",
                            "top",
                            805,
                            395,
                            "linear",
                            "${enter}",
                            '-20px',
                            '-22px'
                        ],
                        [
                            "eid1718",
                            "top",
                            1200,
                            406,
                            "linear",
                            "${enter}",
                            '-22px',
                            '-40px'
                        ],
                        [
                            "eid1791",
                            "top",
                            4595,
                            155,
                            "linear",
                            "${enter}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid1708",
                            "width",
                            0,
                            408,
                            "linear",
                            "${enter}",
                            '45px',
                            '49px'
                        ],
                        [
                            "eid1711",
                            "width",
                            408,
                            397,
                            "linear",
                            "${enter}",
                            '49px',
                            '56px'
                        ],
                        [
                            "eid1715",
                            "width",
                            805,
                            395,
                            "linear",
                            "${enter}",
                            '56px',
                            '61px'
                        ],
                        [
                            "eid1719",
                            "width",
                            1200,
                            406,
                            "linear",
                            "${enter}",
                            '61px',
                            '67px'
                        ],
                        [
                            "eid1792",
                            "width",
                            4595,
                            155,
                            "linear",
                            "${enter}",
                            '67px',
                            '45px'
                        ],
                        [
                            "eid1800",
                            "opacity",
                            4152,
                            0,
                            "linear",
                            "${enter}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1707",
                            "left",
                            0,
                            408,
                            "linear",
                            "${enter}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid1712",
                            "left",
                            408,
                            397,
                            "linear",
                            "${enter}",
                            '6px',
                            '1px'
                        ],
                        [
                            "eid1714",
                            "left",
                            805,
                            395,
                            "linear",
                            "${enter}",
                            '1px',
                            '-4px'
                        ],
                        [
                            "eid1853",
                            "left",
                            1200,
                            406,
                            "linear",
                            "${enter}",
                            '-4px',
                            '-6px'
                        ],
                        [
                            "eid1790",
                            "left",
                            4595,
                            155,
                            "linear",
                            "${enter}",
                            '-6px',
                            '10px'
                        ],
                        [
                            "eid1754",
                            "width",
                            0,
                            408,
                            "linear",
                            "${enter_rot}",
                            '45px',
                            '49px'
                        ],
                        [
                            "eid1757",
                            "width",
                            408,
                            397,
                            "linear",
                            "${enter_rot}",
                            '49px',
                            '56px'
                        ],
                        [
                            "eid1762",
                            "width",
                            805,
                            395,
                            "linear",
                            "${enter_rot}",
                            '56px',
                            '60px'
                        ],
                        [
                            "eid1766",
                            "width",
                            1200,
                            406,
                            "linear",
                            "${enter_rot}",
                            '60px',
                            '67px'
                        ],
                        [
                            "eid1785",
                            "width",
                            4595,
                            155,
                            "linear",
                            "${enter_rot}",
                            '67px',
                            '45px'
                        ],
                        [
                            "eid1768",
                            "opacity",
                            1606,
                            0,
                            "linear",
                            "${enter_rot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1769",
                            "opacity",
                            1834,
                            0,
                            "linear",
                            "${enter_rot}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1770",
                            "opacity",
                            2132,
                            0,
                            "linear",
                            "${enter_rot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1771",
                            "opacity",
                            2402,
                            0,
                            "linear",
                            "${enter_rot}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1772",
                            "opacity",
                            2647,
                            0,
                            "linear",
                            "${enter_rot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1773",
                            "opacity",
                            2901,
                            0,
                            "linear",
                            "${enter_rot}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1774",
                            "opacity",
                            3168,
                            0,
                            "linear",
                            "${enter_rot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1799",
                            "opacity",
                            4152,
                            0,
                            "linear",
                            "${enter_rot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1755",
                            "left",
                            0,
                            408,
                            "linear",
                            "${enter_rot}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid1758",
                            "left",
                            408,
                            397,
                            "linear",
                            "${enter_rot}",
                            '7px',
                            '2px'
                        ],
                        [
                            "eid1761",
                            "left",
                            805,
                            395,
                            "linear",
                            "${enter_rot}",
                            '2px',
                            '-3px'
                        ],
                        [
                            "eid1852",
                            "left",
                            1200,
                            406,
                            "linear",
                            "${enter_rot}",
                            '-3px',
                            '-5px'
                        ],
                        [
                            "eid1788",
                            "left",
                            4595,
                            155,
                            "linear",
                            "${enter_rot}",
                            '-5px',
                            '9px'
                        ],
                        [
                            "eid1706",
                            "height",
                            0,
                            408,
                            "linear",
                            "${enter}",
                            '127px',
                            '137px'
                        ],
                        [
                            "eid1709",
                            "height",
                            408,
                            397,
                            "linear",
                            "${enter}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1713",
                            "height",
                            805,
                            395,
                            "linear",
                            "${enter}",
                            '156px',
                            '170px'
                        ],
                        [
                            "eid1717",
                            "height",
                            1200,
                            406,
                            "linear",
                            "${enter}",
                            '170px',
                            '188px'
                        ],
                        [
                            "eid1793",
                            "height",
                            4595,
                            155,
                            "linear",
                            "${enter}",
                            '188px',
                            '127px'
                        ],
                        [
                            "eid1752",
                            "height",
                            0,
                            408,
                            "linear",
                            "${enter_rot}",
                            '127px',
                            '138px'
                        ],
                        [
                            "eid1756",
                            "height",
                            408,
                            397,
                            "linear",
                            "${enter_rot}",
                            '138px',
                            '158px'
                        ],
                        [
                            "eid1760",
                            "height",
                            805,
                            395,
                            "linear",
                            "${enter_rot}",
                            '158px',
                            '170px'
                        ],
                        [
                            "eid1764",
                            "height",
                            1200,
                            406,
                            "linear",
                            "${enter_rot}",
                            '170px',
                            '190px'
                        ],
                        [
                            "eid1786",
                            "height",
                            4595,
                            155,
                            "linear",
                            "${enter_rot}",
                            '190px',
                            '127px'
                        ]
                    ]
                }
            },
            "enter_rot": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['1', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'enter_rot2',
                            type: 'image',
                            rect: [2, 1, 80, 225, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/enter_rot.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 84, 226]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "raum_grau": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1536px', '2048px', 'auto', 'auto'],
                            id: 'raum_grau',
                            opacity: '0.000000',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/raum_grau.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "raum_grau1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'raum_grau',
                            rect: [0, 0, '1536px', '2048px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/raum_grau.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1536, 2048]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "rummel": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [-126, 80, 1536, 2048, 'auto', 'auto'],
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'png_buntestadtCopy2',
                            symbolName: 'png_buntestadt',
                            type: 'rect',
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px']
                        },
                        {
                            rect: [687, 190, 658, 681, 'auto', 'auto'],
                            id: 'riesenrad',
                            symbolName: 'riesenrad',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [498, 0, 1031, 1059, 'auto', 'auto'],
                            id: 'riesenrad_leuchten',
                            symbolName: 'riesenrad_leuchten',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [0, 845, 352, 374, 'auto', 'auto'],
                            id: 'Geist',
                            symbolName: 'Geist',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [69, 1422, 100, 118, 'auto', 'auto'],
                            id: 'auto2',
                            symbolName: 'auto',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [190, 738, 71, 72, 'auto', 'auto'],
                            id: 'Korb',
                            symbolName: 'Korb',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [893, 873, 139, 54, 'auto', 'auto'],
                            id: 'Spiegelei',
                            symbolName: 'Spiegelei',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [848, 1217, 24, 26, 'auto', 'auto'],
                            id: 'Ball',
                            symbolName: 'Ball',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [400, 992, 331, 682, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.64218', '0.64218', 1], ['50%', '50%']],
                            id: 'Splash',
                            opacity: '1',
                            type: 'rect',
                            symbolName: 'Splash_1'
                        },
                        {
                            rect: [616, 436, 68, 109, 'auto', 'auto'],
                            id: 'diamant',
                            symbolName: 'diamant',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [249, 465, 222, 300, 'auto', 'auto'],
                            id: 'diamant_leuchten',
                            symbolName: 'diamant_leuchten',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [710, 961, 100, 123, 'auto', 'auto'],
                            id: 'fun_leuchten2',
                            symbolName: 'fun_leuchten',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [54, 320, 181, 285, 'auto', 'auto'],
                            id: 'rauch',
                            symbolName: 'rauch',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [185, 932, 80, 142, 'auto', 'auto'],
                            id: 'streifen',
                            symbolName: 'streifen',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [155, 1055, 142, 160, 'auto', 'auto'],
                            id: 'happytime',
                            symbolName: 'happytime',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [1125, 575, 200, 332, 'auto', 'auto'],
                            id: 'action',
                            symbolName: 'action1',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [1045, 597, 500, 343, 'auto', 'auto'],
                            id: 'verlauf',
                            symbolName: 'verlauf',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            rect: [144, 1328, 428, 379, 'auto', 'auto'],
                            id: 'peng',
                            symbolName: 'peng',
                            type: 'rect',
                            opacity: '1'
                        },
                        {
                            type: 'rect',
                            id: 'amusementCopy',
                            symbolName: 'amusement',
                            rect: ['0', 82, 0, 0, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1545, 1707]
                        }
                    }
                },
                timeline: {
                    duration: 45000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1931",
                            "opacity",
                            3545,
                            256,
                            "easeInOutQuad",
                            "${Geist}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1950",
                            "opacity",
                            3914,
                            256,
                            "easeInOutQuad",
                            "${Geist}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Spiegelei}",
                            '893px',
                            '893px'
                        ],
                        [
                            "eid1934",
                            "opacity",
                            2955,
                            295,
                            "easeInOutQuad",
                            "${Korb}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1948",
                            "opacity",
                            4464,
                            295,
                            "easeInOutQuad",
                            "${Korb}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1891",
                            "opacity",
                            0,
                            622,
                            "easeInOutQuad",
                            "${verlauf}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1977",
                            "opacity",
                            6994,
                            622,
                            "easeInOutQuad",
                            "${verlauf}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1908",
                            "opacity",
                            3250,
                            295,
                            "easeInOutQuad",
                            "${auto2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1965",
                            "opacity",
                            4170,
                            294,
                            "easeInOutQuad",
                            "${auto2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1928",
                            "opacity",
                            2672,
                            284,
                            "easeInOutQuad",
                            "${Spiegelei}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1953",
                            "opacity",
                            4759,
                            284,
                            "easeInOutQuad",
                            "${Spiegelei}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Korb}",
                            '190px',
                            '190px'
                        ],
                        [
                            "eid120",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Spiegelei}",
                            '873px',
                            '873px'
                        ],
                        [
                            "eid1903",
                            "opacity",
                            1272,
                            401,
                            "easeInOutQuad",
                            "${streifen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1969",
                            "opacity",
                            6042,
                            401,
                            "easeInOutQuad",
                            "${streifen}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1916",
                            "opacity",
                            2021,
                            332,
                            "easeInOutQuad",
                            "${diamant_leuchten}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1961",
                            "opacity",
                            5362,
                            332,
                            "easeInOutQuad",
                            "${diamant_leuchten}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1897",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${happytime}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1900",
                            "opacity",
                            673,
                            551,
                            "easeInOutQuad",
                            "${happytime}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1971",
                            "opacity",
                            6443,
                            551,
                            "easeInOutQuad",
                            "${happytime}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1923",
                            "opacity",
                            2353,
                            319,
                            "easeInOutQuad",
                            "${Splash}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1957",
                            "opacity",
                            5043,
                            319,
                            "easeInOutQuad",
                            "${Splash}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Geist}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1912",
                            "opacity",
                            1673,
                            348,
                            "easeInOutQuad",
                            "${fun_leuchten2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1963",
                            "opacity",
                            5694,
                            348,
                            "easeInOutQuad",
                            "${fun_leuchten2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1919",
                            "opacity",
                            2021,
                            332,
                            "easeInOutQuad",
                            "${diamant}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1959",
                            "opacity",
                            5362,
                            332,
                            "easeInOutQuad",
                            "${diamant}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1905",
                            "opacity",
                            1272,
                            401,
                            "easeInOutQuad",
                            "${rauch}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1967",
                            "opacity",
                            6042,
                            401,
                            "easeInOutQuad",
                            "${rauch}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1890",
                            "opacity",
                            0,
                            622,
                            "easeInOutQuad",
                            "${peng}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1976",
                            "opacity",
                            6994,
                            622,
                            "easeInOutQuad",
                            "${peng}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid118",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Korb}",
                            '738px',
                            '738px'
                        ],
                        [
                            "eid1896",
                            "opacity",
                            673,
                            551,
                            "easeInOutQuad",
                            "${action}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1973",
                            "opacity",
                            6443,
                            551,
                            "easeInOutQuad",
                            "${action}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Geist}",
                            '845px',
                            '845px'
                        ],
                        [
                            "eid1925",
                            "opacity",
                            2353,
                            319,
                            "easeInOutQuad",
                            "${Ball}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1955",
                            "opacity",
                            5043,
                            319,
                            "easeInOutQuad",
                            "${Ball}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("stadt%20rotation3.2_edgeActions.js");
})("EDGE-99890");
