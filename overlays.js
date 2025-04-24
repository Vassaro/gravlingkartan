const OVERLAYS_TREE = {
  label: "Visa / dölj allt",
  selectAllCheckbox: 'Un/select all',
  children: [
    {
      

      // Ditches
      label: 'Diken',
      selectAllCheckbox: true,
      collapsed: true,
      children: [


        // Mellanängarna
        { label: 'Mellanängarna', selectAllCheckbox: true, collapsed: true, children: [
          { label: "Västra", layer: GROUPS.mellanangarna_vastra },
          { label: "Östra", layer: GROUPS.mellanangarna_ostra },
        ]},


        // CENTRAL 
        { label: "Centrala Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          { label: "Krondiket", layer: GROUPS.skrak },
          { label: "Övriga Centrala Ängarna", layer: GROUPS.centralangarna },
        ]},


        // ÖSTRA 
        { label: "Östra Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          { label: "Överängen", layer: GROUPS.overangen },
          { label: "Övriga Östra Ängarna", layer: GROUPS.ostra },
        ]},

        { label: "Norra Ängarna", layer: GROUPS.norra },

        { label: "Vägar", selectAllCheckbox: true, collapsed: true, children: [
          { label: "E4:an", layer: GROUPS.e4 },
        ]},

      ]},
        { label: "Pågående Projekt", layer: GROUPS.ongoing }
    ]
}

