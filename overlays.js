var overlaysTree = {
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
          { label: "Västra", layer: groups.mellanangarna_vastra },
          { label: "Östra", layer: groups.mellanangarna_ostra },
        ]},


        // CENTRAL 
        { label: "Centrala Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          { label: "Krondiket", layer: groups.skrak },
          { label: "Övriga Centrala Ängarna", layer: groups.centralangarna },
        ]},


        // ÖSTRA 
        { label: "Östra Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          { label: "Överängen", layer: groups.overangen },
          { label: "Övriga Östra Ängarna", layer: groups.ostra },
        ]},

        { label: "Norra Ängarna", layer: groups.norra },

        { label: "Vägar", selectAllCheckbox: true, collapsed: true, children: [
          { label: "E4:an", layer: groups.e4 },
        ]},

      ]},
        { label: "Pågående Projekt", layer: groups.ongoing }
    ]
}
