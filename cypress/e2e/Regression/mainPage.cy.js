/// <reference types="cypress" />


describe('Main Suite', function() {

    it('CAW Studios Automation Scenario', () => {

        cy.fixture('data.json').then((data) => {  
            
            if (!data || !data.tableData) {
                throw new Error('Invalid data.json structure or data not found');
            }

            cy.visit(Cypress.env('url'));
      
            cy.contains('Table Data').click();
            cy.get('#refreshtable').should('exist');

            // Set the width and height of the textarea
            cy.get('#jsondata').invoke('css', 'width', '300px');
            cy.get('#jsondata').invoke('css', 'height', '200px');
      
            cy.get('#jsondata').clear().then(($textarea) => {

                //JSON.stringify to convert the JSON object into a string.
              const jsonDataString = JSON.stringify(data.tableData); 
              cy.wrap($textarea).type(jsonDataString, { parseSpecialCharSequences: false });
            });

            cy.get('#refreshtable').click();

            cy.contains('Sara').should('exist')
            cy.contains('Conor').should('exist')
            cy.contains('Jennifer').should('exist')



            //NOTE: I am getting error at this particular block of code  at line 54 dusplaying error unable to find td"

            // Iterate over the table rows and assert against the JSON data

            // cy.get('table tr').each(($row, index) => {

            //     cy.log(`Verifying row ${index + 1}`);

            //     if (index < data.tableData.length) {
            //         const tableDataRow = data.tableData[index ];
          
            //         cy.wrap($row).within(() => {
            //             console.log(`Verifying row ${index + 1}`);
            //             console.log(`Name: ${tableDataRow.name}`);
            //             console.log(`Age: ${tableDataRow.age}`);
            //             console.log(`Gender: ${tableDataRow.gender}`);
                  
            //             cy.get('td:eq(0)').should('contain', tableDataRow.name);
            //             cy.get('td:eq(1)').should('contain', tableDataRow.age);
            //             cy.get('td:eq(2)').should('contain', tableDataRow.gender);
            //         });
            //     }
            // });
        });
    });

});



