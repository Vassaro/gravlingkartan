/* OLD TREE 
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

            // Ditch A
            { label: "A", selectAllCheckbox: true, collapsed: true, children: [
              { label: "A1", layer: groups.mva1 },
              { label: "A2", layer: groups.mva2 },
              { label: "A3", layer: groups.mva3 },
              { label: "A4", layer: groups.mva4 },
              { label: "a5", layer: groups.mva5 },
              { label: "A6", layer: groups.mva6 },
            ]},

            // Ditch B
            { label: "B", selectAllCheckbox: true, collapsed: true, children: [
              { label: "B1", layer: groups.mvb1 },
              { label: "B2", layer: groups.mvb2 },
              { label: "B3", layer: groups.mvb3 },
              { label: "B4", layer: groups.mvb4 },
            ]},

            // Ditch C 
            { label: "C", selectAllCheckbox: true, collapsed: true, children: [
              { label: "C1", layer: groups.mvc1 },
              { label: "C2", layer: groups.mvc2 },
              { label: "c3", layer: groups.mvc3 },
            ]},

            //  Ditch D 
            { label: "D", layer: groups.mvd1 },

            //  Ditch e 
            { label: "e", layer: groups.mve1 },

            //  Ditch f 
            { label: "f", layer: groups.mvf1 },

            // Ditch g 
            { label: "G", layer: groups.mvg1 },
          ]},


          // Östra mellanängarna
          { label: "Östra", selectAllCheckbox: true, collapsed: true, children: [

            // Ditch A 
            { label: "A", selectAllCheckbox: true, collapsed: true, children: [
              { label: "A1", layer: groups.mea1 },
              { label: "A2", layer: groups.mea2 },
              { label: "A3", layer: groups.mea3 },
              { label: "A4", layer: groups.mea4 },
              { label: "a5", layer: groups.mea5 },
              { label: "A6", layer: groups.mea6 },
              { label: "A7", layer: groups.mea7 },
              { label: "a8", layer: groups.mea8 },
              { label: "A9", layer: groups.mea9 },
              { label: "A10", layer: groups.mea10 },
            ]},

            // Ditch B 
            { label: "B", layer: groups.meb1 },

            // Ditch C 
            { label: "C", selectAllCheckbox: true, collapsed: true, children: [
              { label: "C1", layer: groups.mec1 },
              { label: "C2", layer: groups.mec2 },
            ]},

            // Ditch D 
            { label: "D", layer: groups.med1 },

            // Ditch E 
            { label: "E", layer: groups.mee1 },
          ]},


        ]},



        // CENTRAL 
        { label: "Centrala Ängarna", selectAllCheckbox: true, collapsed: true, children: [
          

          { label: "A", selectAllCheckbox: true, collapsed: true, children: [
          
            { label: "a1", layer: groups.ca1 },
            { label: "A2", layer: groups.ca2 },
            { label: "A3", layer: groups.ca3 },
            { label: "A4", layer: groups.ca4 },
            { label: "A5", layer: groups.ca5 },
            { label: "A6", layer: groups.ca6 },
            { label: "A7", layer: groups.ca7 },
            { label: "A8", layer: groups.ca8 },
            { label: "a9", layer: groups.ca9 },
            { label: "A10", layer: groups.ca10 },
            { label: "A11", layer: groups.ca11 },
            { label: "A12", layer: groups.ca12 },
            { label: "A13", layer: groups.ca13 },
            { label: "a14", layer: groups.ca14 },
            { label: "A15", layer: groups.ca15 },
            { label: "A16", layer: groups.ca16 },
            { label: "A17", layer: groups.ca17 },
            { label: "A18", layer: groups.ca18 },
          
          ]},
          

          { label: "B", selectAllCheckbox: true, collapsed: true, children: [

            { label: "B1", layer: groups.cb1 },
            { label: "b2", layer: groups.cb2 },
            { label: "B3", layer: groups.cb3 },
          
          ]},


          { label: "C", selectAllCheckbox: true, collapsed: true, children: [

            { label: "C1", layer: groups.cc1 },
            { label: "c2", layer: groups.cc2 },
            { label: "C3", layer: groups.cc3 },
            { label: "c4", leyer: groups.cc4 },
            { label: "C5", layer: groups.cc5 },

          ]},


          { label: "D", layer: groups.cd1 },


          { label: "E", selectAllCheckbox: true, collapsed: true, children: [

            { label: "E1", layer: groups.ce1 },
            { label: "e2", layer: groups.ce2 },
            { label: "E3", layer: groups.ce3 },

          ]},


          { label: "F", selectAllCheckbox: true, collapsed: true, children: [

            { label: "F1", layer: groups.cf1 },
            { label: "F2", layer: groups.cf2 },
            { label: "F3", layer: groups.cf3 },
            { label: "f4", layer: groups.cf4 },
            { label: "F5", layer: groups.cf5 },
            { label: "F6", layer: groups.cf6 },

          ]},


          { label: "G", selectAllCheckbox: true, collapsed: true, children: [

            { label: "G1", layer: groups.cg1 },
            { label: "g2", layer: groups.cg2 },
            { label: "G3", layer: groups.cg3 },

          ]},

          
          { label: "H", selectAllCheckbox: true, collapsed: true, children: [

            { label: "h1", layer: groups.ch1 },
            { label: "H2", layer: groups.ch2 },
            { label: "h3", layer: groups.ch3 },
            { label: "H4", layer: groups.ch4 },

          ]},


          { label: "I", selectAllCheckbox: true, collapsed: true, children: [

            { label: "I1", layer: groups.ci1 },
            { label: "I2", layer: groups.ci2 },

          ]},
        ]}

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
*/ 


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
        ]}

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
