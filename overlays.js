var overlaysTree = {
  label: "Kartfilter",
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

          // Västra mellanängarna
          { label: "Västra", selectAllCheckbox: true, collapsed: true, children: [
            { label: "A", layer: groups.mva },
            { label: "B", layer: groups.mvb },
            { label: "C", layer: groups.mvc },
            { label: "D", layer: groups.mvd },
            { label: "e", layer: groups.mve },
            { label: "f", layer: groups.mvf },
            { label: "G", layer: groups.mvg },
          ]},

          // Östra mellanängarna
          { label: "Östra", selectAllCheckbox: true, collapsed: true, children: [
            { label: "A", layer: groups.mea },
            { label: "B", layer: groups.meb },
            { label: "C", layer: groups.mec },
            { label: "D", layer: groups.med },
            { label: "E", layer: groups.mee },
          ]},

        ]},


        // CENTRAL 
        { label: "Centrala Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          { label: "A", layer: groups.ca },
          { label: "B", layer: groups.cb },
          { label: "C", layer: groups.cc },
          { label: "D", layer: groups.cd },
          { label: "E", layer: groups.ce },
          { label: "F", layer: groups.cf },
          { label: "G", layer: groups.cg },
          { label: "H", layer: groups.ch },
          { label: "I", layer: groups.ci },
          // Skrak
          { label: "Krondiket", selectAllCheckbox: true, collapsed: true, children: [
            { label: "A", layer: groups.sa },
            { label: "B", layer: groups.sb },
          ]},
        ]},


        // ÖSTRA 
        { label: "Östra Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          { label: "A", layer: groups.oa },
          { label: "B", layer: groups.ob },
          { label: "C", layer: groups.oc },
          // Överängen
          { label: "Överängen", selectAllCheckbox: true, collapsed: true, children: [
            { label: "A", layer: groups.ooa },
            { label: "B", layer: groups.oob },
          ]}
        ]},

        { label: "Norra Ängarna", layer: groups.norra }

    ]},
        {
            label: "Annat",
            selectAllCheckbox: false,
            collapsed: false,
            children: [
		            { label: "Dass", layer: groups.toilets },
		            { label: "Soprum", layer: groups.trashrooms },

            ]
            // "Lokaler": groups.bookablerooms,
            // "Områden": groups.areas,
        }
    ]
}
