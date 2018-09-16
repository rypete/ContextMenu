import {ContextMenu} from "./ContextMenu.js";

//event listeners.
document.addEventListener('DOMContentLoaded', () => {

    if (typeof fin != 'undefined') {
	fin.desktop.main(onMain);
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    const menu = new ContextMenu(menuOptions);

    menu.addEventListener("click", (e) => {
        document.getElementById("clicker").innerText = `Clicked ${e.label}`;
    });

    

    window.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        menu.show(ev.screenX, ev.screenY)
        return false;
    }, false);
}


const menuOptions = [
    {
        label: "BMW",
        extends: [
            {
                label: "2 Series",
                extends: [
                    {label: "Coupe"},
                    {label: "Convertible"},
                    {label: "Active Tourer"}
                ]
            },
            {
                label: "3 Series",
                extends: [
                    {label: "Sedan"},
                    {label: "Gran Coupe"},
                    {label: "Touring"}
                ]
            },
            {
                label: "X Series",
                extends: [
                    {label: "X1"},
                    {label: "X2"},
                    {label: "X3"},
                    {label: "X4"},
                    {label: "X5"},
                    {label: "X6"}

                ]
            },
            {
                label: "M Series",
                extends: [
                    {label: "M2 Competition"},
                    {label: "M3 Sedan"},
                    {label: "M4 Coupe"},
                    {label: "X5 Sedan"},
                    {label: "X6 M"}
                ]
            }
        ]
    },
    {
        label: "Lamborghini",
        extends: [
            {label: "Centenario"},
            {label: "Veneno"},
            {label: "Asterion"},
            {label: "Estoque"}
        ]
    },
    {
        label: "Toyota",
        extends: [
            {
                label: "Trucks",
                extends: [
                    {
                        label: "Utility",
                        extends: [
                            {label: "Coaster"},
                            {label: "Dyna"}
                        ]
                    },
                    {label: "Tundra"},
                    {label: "Tacoma"},
                    {label: "Proace"},
                    {label: "Hiace"}
                ]
            },
            {
                label: "SUV",
                extends: [
                    {label: "4Runner"},
                    {label: "Highlander"},
                    {label: "Rav4"},
                    {label: "Sequoia"},
                    {label: "Fortruner"}
                ]
            },
            {
                label: "Cars",
                extends: [
                    {
                        label: "Sedan",
                        extends: [
                            {label: "Aurion"},
                            {label: "Avalon"},
                            {label: "Corolla"},
                            {label: "Crown"},
                            {label: "Prius"},
                            {label: "Vios"},
                            {label: "Camry"},
                        ]
                    },
                    {
                        label: "Compact",
                        extends: [
                            {label: "Agya"},
                            {label: "Etios"},
                            {label: "Prius C"},
                            {label: "Yaris"},
                            {label: "Liva"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "BMW",
        extends: [
            {
                label: "2 Series",
                extends: [
                    {label: "Coupe"},
                    {label: "Convertible"},
                    {label: "Active Tourer"}
                ]
            },
            {
                label: "3 Series",
                extends: [
                    {label: "Sedan"},
                    {label: "Gran Coupe"},
                    {label: "Touring"}
                ]
            },
            {
                label: "X Series",
                extends: [
                    {label: "X1"},
                    {label: "X2"},
                    {label: "X3"},
                    {label: "X4"},
                    {label: "X5"},
                    {label: "X6"}

                ]
            },
            {
                label: "M Series",
                extends: [
                    {label: "M2 Competition"},
                    {label: "M3 Sedan"},
                    {label: "M4 Coupe"},
                    {label: "X5 Sedan"},
                    {label: "X6 M"}
                ]
            }
        ]
    },
    {
        label: "Lamborghini",
        extends: [
            {label: "Centenario"},
            {label: "Veneno"},
            {label: "Asterion"},
            {label: "Estoque"}
        ]
    },
    {
        label: "Toyota",
        extends: [
            {
                label: "Trucks",
                extends: [
                    {
                        label: "Utility",
                        extends: [
                            {label: "Coaster"},
                            {label: "Dyna"}
                        ]
                    },
                    {label: "Tundra"},
                    {label: "Tacoma"},
                    {label: "Proace"},
                    {label: "Hiace"}
                ]
            },
            {
                label: "SUV",
                extends: [
                    {label: "4Runner"},
                    {label: "Highlander"},
                    {label: "Rav4"},
                    {label: "Sequoia"},
                    {label: "Fortruner"}
                ]
            },
            {
                label: "Cars",
                extends: [
                    {
                        label: "Sedan",
                        extends: [
                            {label: "Aurion"},
                            {label: "Avalon"},
                            {label: "Corolla"},
                            {label: "Crown"},
                            {label: "Prius"},
                            {label: "Vios"},
                            {label: "Camry"},
                        ]
                    },
                    {
                        label: "Compact",
                        extends: [
                            {label: "Agya"},
                            {label: "Etios"},
                            {label: "Prius C"},
                            {label: "Yaris"},
                            {label: "Liva"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "BMW",
        extends: [
            {
                label: "2 Series",
                extends: [
                    {label: "Coupe"},
                    {label: "Convertible"},
                    {label: "Active Tourer"}
                ]
            },
            {
                label: "3 Series",
                extends: [
                    {label: "Sedan"},
                    {label: "Gran Coupe"},
                    {label: "Touring"}
                ]
            },
            {
                label: "X Series",
                extends: [
                    {label: "X1"},
                    {label: "X2"},
                    {label: "X3"},
                    {label: "X4"},
                    {label: "X5"},
                    {label: "X6"}

                ]
            },
            {
                label: "M Series",
                extends: [
                    {label: "M2 Competition"},
                    {label: "M3 Sedan"},
                    {label: "M4 Coupe"},
                    {label: "X5 Sedan"},
                    {label: "X6 M"}
                ]
            }
        ]
    },
    {
        label: "Lamborghini",
        extends: [
            {label: "Centenario"},
            {label: "Veneno"},
            {label: "Asterion"},
            {label: "Estoque"}
        ]
    },
    {
        label: "Toyota",
        extends: [
            {
                label: "Trucks",
                extends: [
                    {
                        label: "Utility",
                        extends: [
                            {label: "Coaster"},
                            {label: "Dyna"}
                        ]
                    },
                    {label: "Tundra"},
                    {label: "Tacoma"},
                    {label: "Proace"},
                    {label: "Hiace"}
                ]
            },
            {
                label: "SUV",
                extends: [
                    {label: "4Runner"},
                    {label: "Highlander"},
                    {label: "Rav4"},
                    {label: "Sequoia"},
                    {label: "Fortruner"}
                ]
            },
            {
                label: "Cars",
                extends: [
                    {
                        label: "Sedan",
                        extends: [
                            {label: "Aurion"},
                            {label: "Avalon"},
                            {label: "Corolla"},
                            {label: "Crown"},
                            {label: "Prius"},
                            {label: "Vios"},
                            {label: "Camry"},
                        ]
                    },
                    {
                        label: "Compact",
                        extends: [
                            {label: "Agya"},
                            {label: "Etios"},
                            {label: "Prius C"},
                            {label: "Yaris"},
                            {label: "Liva"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "BMW",
        extends: [
            {
                label: "2 Series",
                extends: [
                    {label: "Coupe"},
                    {label: "Convertible"},
                    {label: "Active Tourer"}
                ]
            },
            {
                label: "3 Series",
                extends: [
                    {label: "Sedan"},
                    {label: "Gran Coupe"},
                    {label: "Touring"}
                ]
            },
            {
                label: "X Series",
                extends: [
                    {label: "X1"},
                    {label: "X2"},
                    {label: "X3"},
                    {label: "X4"},
                    {label: "X5"},
                    {label: "X6"}

                ]
            },
            {
                label: "M Series",
                extends: [
                    {label: "M2 Competition"},
                    {label: "M3 Sedan"},
                    {label: "M4 Coupe"},
                    {label: "X5 Sedan"},
                    {label: "X6 M"}
                ]
            }
        ]
    },
    {
        label: "Lamborghini",
        extends: [
            {label: "Centenario"},
            {label: "Veneno"},
            {label: "Asterion"},
            {label: "Estoque"}
        ]
    },
    {
        label: "Toyota",
        extends: [
            {
                label: "Trucks",
                extends: [
                    {
                        label: "Utility",
                        extends: [
                            {label: "Coaster"},
                            {label: "Dyna"}
                        ]
                    },
                    {label: "Tundra"},
                    {label: "Tacoma"},
                    {label: "Proace"},
                    {label: "Hiace"}
                ]
            },
            {
                label: "SUV",
                extends: [
                    {label: "4Runner"},
                    {label: "Highlander"},
                    {label: "Rav4"},
                    {label: "Sequoia"},
                    {label: "Fortruner"}
                ]
            },
            {
                label: "Cars",
                extends: [
                    {
                        label: "Sedan",
                        extends: [
                            {label: "Aurion"},
                            {label: "Avalon"},
                            {label: "Corolla"},
                            {label: "Crown"},
                            {label: "Prius"},
                            {label: "Vios"},
                            {label: "Camry"},
                        ]
                    },
                    {
                        label: "Compact",
                        extends: [
                            {label: "Agya"},
                            {label: "Etios"},
                            {label: "Prius C"},
                            {label: "Yaris"},
                            {label: "Liva"}
                        ]
                    }
                ]
            }
        ]
    }
    
]
