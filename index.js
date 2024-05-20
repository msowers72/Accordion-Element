let fsoOfficers = [
    { id: 1, fso: 'CPT Diamond Akers', email: 'diamond.m.akers.mil@army.mil', base: 'Schofield Barracks', address: '580 Kolekole Ave, Schofield Barracks, HI 96857' },
    { id: 2, fso: 'CPT Josalyn Ayuso-Holloway', email: 'josalyn.i.ayusoholloway.mil@army.mil', base: 'Schofield Barracks', address: '580 Kolekole Ave, Schofield Barracks, HI 96857' },
    { id: 3, fso: 'CPT Stuart Hamm', email: 'stuart.a.hamm.mil@army.mil', base: 'Schofield Barracks', address: '580 Kolekole Ave, Schofield Barracks, HI 96857' },
    { id: 4, fso: 'MAJ MaCayn May', email: 'macayn.a.may.mil@army.mil', base: 'Schofield Barracks', address: '580 Kolekole Ave, Schofield Barracks, HI 96857' },
    { id: 5, fso: 'CPT Brian Wilson', email: 'brian.c.wilson73.mil@army.mil', base: 'Schofield Barracks', address: '580 Kolekole Ave, Schofield Barracks, HI 96857' },
    { id: 6, fso: 'MAJ Austin Bowyer', email: 'austin.l.bowyer.mil@army.mil', base: 'Fort McCoy', address: 'Fort McCoy, WI 54656' },
    { id: 7, fso: 'CPT Bryanna Beauchamp', email: 'bryanna.m.beauchamp.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 8, fso: 'CPT Sophia Chua Rubenfeld', email: 'sophia.d.chuarubenfeld.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 9, fso: 'CPT Connor Doyle', email: 'connor.a.doyle.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 10, fso: 'CPT Nicholas Leslie', email: 'nicholas.k.leslie.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 11, fso: 'CPT Curtis LittleSun', email: 'curtis.w.littlesun.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 12, fso: 'CPT Matthew Rich', email: 'matthew.s.rich7.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 13, fso: 'MAJ Keith Stewart', email: 'keith.a.stewart16.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 14, fso: 'CPT Rose Valera', email: 'rose.e.valera.mil@army.mil', base: 'Joint Base Lewis-McChord', address: '9902 Lincoln St, Joint Base Lewis-McChord, WA 98433' },
    { id: 15, fso: 'LTC Joshua Krupa', email: 'joshua.w.krupa.mil@army.mil', base: 'Izmir', address: '35620 Atatürk Osb/Çiğli/İzmir, Türkiye' },
    { id: 16, fso: 'CPT Breanne Phan', email: 'breanne.k.phan.mil@army.mil', base: 'Fort Jackson', address: '2600 Lee Rd, Columbia, SC 29207' },
    { id: 17, fso: 'CPT Andrea Moreno', email: 'andrea.j.moreno.mil@army.mil', base: 'Camp Humphreys', address: '72-3 Dongchang-ri, Paengseong-eup, Pyeongtaek, Gyeonggi-do, South Korea' },
    { id: 18, fso: 'MAJ Joseph Van Dusen', email: 'joseph.c.vandusen2.mil@army.mil', base: 'Fort Sill', address: 'McNair Hall, 455 McNair Rd, Fort Sill, OK 73503' },
    { id: 19, fso: 'MAJ Rufus Allen', email: 'rufus.c.allen.mil@army.mil', base: 'White Sands Missile Range', address: 'White Sands Missile Range, NM' },
    { id: 20, fso: 'CPT Derek Sanchez', email: 'derek.r.sanchez2.mil@army.mil', base: 'Fort Wainwright', address: 'Fort Wainwright, Fairbanks, AK 99703' },
    { id: 21, fso: 'CPT Brent Higgins', email: 'brent.k.higgins.mil@army.mil', base: 'Joint Base Elmendorf-Richardson', address: 'Joint Base Elmendorf-Richardson, Anchorage, AK 99505' },
    { id: 22, fso: 'CPT Connor Kohlscheen', email: 'connor.b.kohlscheen.mil@army.mil', base: 'Joint Base Elmendorf-Richardson', address: 'Joint Base Elmendorf-Richardson, Anchorage, AK 99505' },
    { id: 23, fso: 'MAJ Kyle Burgamy', email: 'kyle.v.burgamy.mil@army.mil', base: 'Fort Novosel', address: 'Fort Novosel, AL' },
    { id: 24, fso: 'CPT Julian Kisner', email: 'julian.c.kisner.mil@army.mil', base: 'Redstone Arsenal', address: 'Redstone Arsenal, AL' },
    { id: 25, fso: 'MAJ Clyde Kilgore', email: 'clyde.j.kilgore.mil@army.mil', base: 'Fort Huachuca', address: 'Fort Huachuca, Sierra Vista, AZ' },
    { id: 26, fso: 'CPT Kiahhn Cooper', email: 'kiahhn.l.jackson.mil@army.mil', base: 'Fort George G. Meade', address: '4217 Morrison St, Fort Meade, MD 20755' },
    { id: 27, fso: 'CPT Megan Mejia', email: 'megan.o.mejia.mil@army.mil', base: 'Fort George G. Meade', address: '4217 Morrison St, Fort Meade, MD 20755' },
    { id: 28, fso: 'CPT Andrew Harman', email: 'andrew.j.harman.mil@army.mil', base: 'Joint Base San Antonio', address: '2422 Stanley Rd Bldg 134, San Antonio, TX 78234' },
    { id: 29, fso: 'CPT Jeffrey Hatfield', email: 'jeffrey.d.hatfield2.mil@army.mil', base: 'Joint Base San Antonio', address: '2422 Stanley Rd Bldg 134, San Antonio, TX 78234' },
    { id: 30, fso: 'CPT James Lawrence', email: 'james.b.lawrence30.mil@army.mil', base: 'Joint Base San Antonio', address: '2422 Stanley Rd Bldg 134, San Antonio, TX 78234' },
    { id: 31, fso: 'CPT Taylor Bayless', email: 'taylor.p.bayless.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 32, fso: 'CPT Michael Brinkley', email: 'michael.b.brinkley.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 33, fso: 'CPT Justin Hayes', email: 'justin.b.hayes.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 34, fso: 'CPT Jeremy Lewis', email: 'jeremy.e.lewis.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 35, fso: 'CPT Sarah Mangru', email: 'sarah.a.mangru.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 36, fso: 'CPT Nicholas Masters', email: 'nicholas.w.masters.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 37, fso: 'CPT Megan Moore', email: 'meghan.e.moore.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 38, fso: 'CPT Steven Siberski', email: 'steven.r.siberski.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 39, fso: 'CPT Cassidy Siberski', email: 'cassidy.t.siberski.mil@army.mil', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 40, fso: 'CPT Bradan Thomas', email: 'bradan.t.thomas.mil@army.mil ', base: 'Fort Cavazos', address: 'Fort Cavazos, TX' },
    { id: 41, fso: 'CPT Javier Diaz', email: 'javier.j.diaz4.mil@army.mil', base: 'Fort Bliss', address: 'Fort Bliss, TX' },
    { id: 42, fso: 'CPT Michael Salvucci', email: 'michael.a.salvucci.mil@army.mil', base: 'Fort Bliss', address: 'Fort Bliss, TX' },
    { id: 43, fso: 'CPT Jason Staloski', email: 'jason.m.staloski.mil@army.mil', base: 'Fort Bliss', address: 'Fort Bliss, TX' },
    { id: 44, fso: 'CPT Sergio Tarin', email: 'sergio.m.tarin.mil@army.mil', base: 'Fort Bliss', address: 'Fort Bliss, TX' },
    { id: 45, fso: 'CPT Sarah Bailey', email: 'sarah.h.bailey3.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 46, fso: 'CPT Victoria Bell', email: 'victoria.j.bell2.mil@army.mi', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 47, fso: 'MAJ Timothy Emmons', email: 'timothy.r.emmons2.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 48, fso: 'CPT Matthew Fields', email: 'matthew.s.fields14.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 49, fso: 'CPT Christopher Goren', email: 'christopher.d.goren.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 50, fso: 'LTC Pamela Jones', email: 'pamela.l.jones90.mil@mail.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 51, fso: 'MAJ Bhargav Katikaneni', email: 'bhargav.katikaneni.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 52, fso: 'CPT Lisa Limb', email: 'lisa.limb.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 53, fso: 'MAJ Brandon Mark', email: 'brandon.p.mark.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 54, fso: 'CPT Rachel Rose', email: 'rachel.m.rose5.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 55, fso: 'CPT Anthony Scarpati', email: 'anthony.j.scarpati3.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 56, fso: 'CPT Kevin Todorow', email: 'kevin.t.todorow.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 57, fso: 'CPT Justin Watkins', email: 'justin.l.watkins4.mil@army.mil', base: 'Fort Belvoir', address: '9990 Belvoir Dr, Fort Belvoir, VA 22060' },
    { id: 58, fso: 'CPT Michael Barrett', email: 'michael.t.barrett1.mil@army.mil', base: 'Fort Gregg-Adams', address: 'Fort Gregg-Adams, VA' },
    { id: 59, fso: 'CPT Andrew Cerchio', email: 'andrew.r.cerchio.mil@army.mil', base: 'Fort Gregg-Adams', address: 'Fort Gregg-Adams, VA' },
    { id: 60, fso: 'CPT Nathaniel Eliasen', email: 'nathaniel.w.eliasen.mil@army.mil', base: 'Fort Myer', address: 'Fort Myer, Arlington, VA 22211' },
    { id: 61, fso: 'CPT Kristen Dorfman', email: 'kristen.l.dorfman.mil@army.mil', base: 'The Pentagon', address: 'Washington, VA' },
    { id: 62, fso: 'MAJ Tahimy Espaillat', email: 'tahimy.a.espaillat.mil@army.mil', base: 'The Pentagon', address: 'Washington, VA' },
    { id: 63, fso: 'LTC Philip Maxwell', email: 'philip.c.maxwell.mil@army.mil', base: 'The Pentagon', address: 'Washington, VA' },
    { id: 64, fso: 'MAJ Katherine Mitroka', email: 'katherine.f.mitroka2.mil@army.mil', base: 'The Pentagon', address: 'Washington, VA' },
    { id: 65, fso: 'LTC Michael Schauss', email: 'michael.e.schauss.mil@army.mil', base: 'The Pentagon', address: 'Washington, VA' },
    { id: 66, fso: 'MAJ Matthew Bryan', email: 'matthew.t.bryan.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 67, fso: 'MAJ Cathy Hartsfield', email: 'cathy.h.hartsfield.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 68, fso: 'MAJ Justin MacDonald', email: 'justin.m.macdonald8.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 69, fso: 'LTC Rick Mathew', email: 'rick.b.mathew.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 70, fso: 'MAJ Ryan McCormick', email: 'ryan.m.mccormick.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 71, fso: 'MAJ Amanda McMenamin', email: 'amanda.l.mcmenamin.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 72, fso: 'MAJ Joseph Morman', email: 'joseph.a.morman.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 73, fso: 'MAJ Joseph Morman', email: 'david.l.retland2.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 74, fso: 'CPT Carol Rim', email: 'carol.k.rim.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 75, fso: 'MAJ Nichole Venious', email: 'nichole.m.venious.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 76, fso: 'MAJ Matthew Wyatt', email: 'matthew.g.wyatt.mil@army.mil', base: 'The Judge Advocate Generals Legal Center and School', address: '600 Massie Rd, Charlottesville, VA 22903' },
    { id: 77, fso: 'CPT Kevin Farrelly', email: 'kevin.t.farrelly.mil@army.mil', base: 'Joint Base Langley-Eustis', address: '2732, Fort Eustis, VA 23604' },
    { id: 78, fso: 'CPT Hamzah Khan', email: 'hamzah.khan.mil@army.mil', base: 'United States Military Academy', address: '606 Thayer Rd, West Point, NY 10996' },
    { id: 79, fso: 'CPT Erica Barrera', email: 'erica.l.barrera2.mil@army.mil', base: 'Fort Drum', address: 'Fort Drum, NY' },
    { id: 80, fso: 'MAJ Meaghan Burnes', email: 'meaghan.e.burnes.mil@army.mil', base: 'Fort Drum', address: 'Fort Drum, NY' },
    { id: 81, fso: 'CPT Peter Couto', email: 'peter.j.couto.mil@army.mil', base: 'Fort Drum', address: 'Fort Drum, NY' },
    { id: 82, fso: 'CPT Jessica Adler', email: 'jessica.a.adler2.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 83, fso: 'MAJ Ardalan Azad', email: 'ardalan.azad.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 84, fso: 'CPT Leyla Brammer', email: 'leyla.z.brammer.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 85, fso: 'CPT Antionette Carradine', email: 'antionette.c.carradine.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 86, fso: 'LTC Christopher Coleman', email: 'christopher.coleman34.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 87, fso: 'CPT Suzanne Dycus', email: 'suzanne.j.dycus.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 88, fso: 'CPT Jordan Green', email: 'jordan.a.green16.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 89, fso: 'MAJ Shaloe Green', email: 'shaloe.t.green.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 90, fso: 'CPT Sarah Harvey', email: 'sarah.m.harvey.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 91, fso: 'CPT Christina Johnson', email: 'christina.g.johnson.mil@socom.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 92, fso: 'CPT Cadman Kiker', email: 'cadman.r.kiker.mil@socom.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 93, fso: 'CPT Gabrielle Lucero', email: 'gabrielle.r.lucero.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 94, fso: 'CPT Benjamin Newhouse', email: 'benjamin.s.newhouse2.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 95, fso: 'CPT Ellen Walburn', email: 'ellen.s.walburn.mil@army.mil', base: 'Fort Liberty', address: 'Gavin Hall, Bldg C-7417, Room, 201 All American Way, Fort Liberty, NC 28307' },
    { id: 96, fso: 'CPT Lyndsey Andray', email: 'lyndsey.m.andray.mil@army.mil', base: 'Fort Knox', address: 'Fort Knox, KY' },
    { id: 97, fso: 'CPT Eli Creighton', email: 'eli.m.creighton.mil@army.mil', base: 'Fort Knox', address: 'Fort Knox, KY' },
    { id: 98, fso: 'CPT Meredith Forston', email: 'meredith.m.forston.mil@army.mil', base: 'Fort Knox', address: 'Fort Knox, KY' },
    { id: 99, fso: 'MAJ Jarom Ricks', email: 'jarom.m.ricks.mil@army.mil', base: 'Fort Knox', address: 'Fort Knox, KY' },
    { id: 100, fso: 'MAJ Andrew Deel', email: 'andrew.w.deel.mil@army.mil', base: 'Fort Campbell', address: 'Fort Campbell, KY' },
    { id: 101, fso: 'CPT Matthew Doyle', email: 'matthew.s.doyle.mil@army.mil', base: 'Fort Campbell', address: 'Fort Campbell, KY' },
    { id: 102, fso: 'CPT Thomas Evans', email: 'thomas.d.evans.mil@army.mil', base: 'Fort Campbell', address: 'Fort Campbell, KY' },
    { id: 103, fso: 'CPT Victoria Haag', email: 'victoria.e.haag.mil@army.mil', base: 'Fort Campbell', address: 'Fort Campbell, KY' },
    { id: 104, fso: 'MAJ Aaron McCartney', email: 'aaron.k.mccartney.mil@army.mil', base: 'Fort Campbell', address: 'Fort Campbell, KY' },
    { id: 105, fso: 'CPT Brianna Morlock', email: 'brianna.k.morlock.mil@army.mil', base: 'Fort Campbell', address: 'Fort Campbell, KY' },
    { id: 106, fso: 'CPT Sergio Suarez', email: 'sergio.l.suarez.mil@army.mil', base: 'Fort Campbell', address: 'Fort Campbell, KY' },
    { id: 107, fso: 'CPT Mandi Shaughnessy-Ford', email: 'mandi.m.shaughnessy-ford.mil@army.mil', base: 'Fort Riley', address: 'Fort Riley, KS' },
    { id: 108, fso: 'CPT Courtney Wonsetler', email: 'courtney.d.wonsetler.mil@army.mil', base: 'Fort Riley', address: 'Fort Riley, KS' },
    { id: 109, fso: 'MAJ Charlie Fowler', email: 'charlie.m.fowler.mil@army.mil', base: 'Fort Leavenworth', address: 'Fort Leavenworth, KS' },
    { id: 109, fso: 'LTC Krista Bartolomucci', email: 'krista.l.bartolomucci.mil@army.mil', base: 'Rock Island Arsenal', address: 'Rock Island Arsenal, IL' },
    { id: 110, fso: 'CPT Kristofher Beralo', email: 'kristofher.r.beralo.mil@army.mil', base: 'Fort Shafter', address: 'Fort Shafter, Honolulu, HI 96819' },
    { id: 111, fso: 'CPT Maurizo Lewis-Streit', email: 'maurizo.s.lewis-streit.mil@army.mil', base: 'Fort Shafter', address: 'Fort Shafter, Honolulu, HI 96819' },
    { id: 112, fso: 'CPT Heather Waagner', email: 'heather.l.waagner.mil@army.mil', base: 'Fort Shafter', address: 'Fort Shafter, Honolulu, HI 96819' },
    { id: 113, fso: 'MAJ Amber Turner', email: 'amber.l.turner22.mil@army.mil', base: 'Wheeler Army Airfield', address: 'Wheeler Army Airfield, HI 96786' },
    { id: 114, fso: 'CPT Robert Clopton', email: 'robert.e.clopton5.mil@army.mil', base: 'Fort Gordon', address: 'Fort Eisenhower, Augusta, GA' },
    { id: 115, fso: 'MAJ Collin Evans', email: 'collin.p.evans2.mil@army.mil', base: 'Fort Gordon', address: 'Fort Eisenhower, Augusta, GA' },
    { id: 116, fso: 'CPT Rebecca Ashby', email: 'rebecca.s.ashby2.mil@health.mil', base: 'Fort Stewart', address: 'Fort Stewart, GA' },
    { id: 117, fso: 'CPT Kristen Coppock', email: 'kristen.r.coppock.mil@army.mil', base: 'Fort Stewart', address: 'Fort Stewart, GA' },
    { id: 118, fso: 'CPT Mark Cornman', email: 'mark.a.cornman2.mil@army.mil', base: 'Fort Stewart', address: 'Fort Stewart, GA' },
    { id: 119, fso: 'CPT Anthony Poulos', email: 'anthony.j.poulos.mil@army.mil', base: 'Fort Stewart', address: 'Fort Stewart, GA' },
    { id: 120, fso: 'CPT Kaylyn Sands', email: 'kaylyn.a.sands.mil@army.mil', base: 'Fort Stewart', address: 'Fort Stewart, GA' },
    { id: 121, fso: 'CPT Gabrielle Bloodsaw', email: 'gabrielle.d.bloodsaw.mil@army.mil', base: 'Fort Moore', address: 'Fort Moore, GA 31905' },
    { id: 122, fso: 'CPT Stephen Clarke', email: 'stephen.j.clarke6.mil@army.mil', base: 'Fort Moore', address: 'Fort Moore, GA 31905' },
    { id: 123, fso: 'MAJ Daniel Hancock', email: 'daniel.w.hancock.mil@army.mil', base: 'Fort Moore', address: 'Fort Moore, GA 31905' },
    { id: 124, fso: 'CPT Bernard Marshall', email: 'bernard.m.marshall.mil@socom.mil', base: 'Eglin Air Force Base', address: 'Eglin AFB, FL 32542' },
    { id: 125, fso: 'CPT Christopher Scribner', email: 'christopher.m.scribner3.mil@army.mil', base: 'Eglin Air Force Base', address: 'Eglin AFB, FL 32542' },
    { id: 126, fso: 'CPT Kelsey Fleener', email: 'kelsey.d.fleener.mil@army.mil', base: 'Fort Carson', address: 'Fort Carson, CO' },
    { id: 127, fso: 'CPT Jori-Anne Jasper', email: 'jori.a.jasper.mil@army.mil', base: 'Fort Carson', address: 'Fort Carson, CO' },
    { id: 128, fso: 'CPT Branden Nethken', email: 'branden.r.nethken.mil@socom.mil', base: 'Fort Carson', address: 'Fort Carson, CO' },
    { id: 129, fso: 'CPT Ingrid Ryman', email: 'ingrid.b.ryman.mil@army.mil', base: 'Fort Carson', address: 'Fort Carson, CO' },
    { id: 130, fso: 'CPT Luke Woolman', email: 'luke.m.woolman.mil@socom.mil', base: 'Fort Carson', address: 'Fort Carson, CO' },
    { id: 131, fso: 'CPT Thomas Wisniewski', email: 'thomas.s.wisniewski3.mil@army.mil', base: 'Fort Carson', address: 'Fort Carson, CO' },
    { id: 132, fso: 'CPT Nathan Stopps', email: 'nathan.m.stopps.mil@army.mil', base: 'Fort Irwin', address: 'Fort Irwin, CA' },
    { id: 133, fso: 'CPT Phil Lakin', email: 'philip.w.lakin3.mil@army.mil', base: 'Grafenwöhr', address: '92655 Grafenwöhr, Germany' },
    { id: 134, fso: 'MAJ Sara Nicholson', email: 'sara.j.nicholson2.mil@army.mil', base: 'Kaiserslautern', address: 'Mannheimer Str. 3266b, 67657 Kaiserslautern, Germany' },
    { id: 135, fso: 'MAJ Kevin Anderson', email: 'kevin.d.anderson8.mil@army.mil', base: 'Kaiserslautern', address: 'Mannheimer Str. 3266b, 67657 Kaiserslautern, Germany' },
    { id: 136, fso: 'MAJ Hannah He', email: 'hannah.g.he.mil@army.mil', base: 'Wiesbaden', address: 'Floridastraße 4, 65189 Wiesbaden, Germany' },
    { id: 137, fso: 'CPT Katie Johnson', email: 'katie.l.johnson55.mil@army.mil', base: 'Wiesbaden', address: 'Floridastraße 4, 65189 Wiesbaden, Germany' },
    { id: 138, fso: 'CPT Kevin Lee', email: 'kevin.b.lee35.mil@army.mil', base: 'Berlin', address: 'Pariser Platz 2, 10117 Berlin, Germany' },
    
];

const postContainer = document.querySelector('.card-container');


const postMethods = () => {   
    

    fsoOfficers.map((postData) => {
        // console.log(postData)
        const postElement = document.createElement('div'); 
        postElement.classList.add('card')

        if (postData.base === "Schofield Barracks") {
          
       }

        postElement.innerHTML = `
        <h3 class="card-heading"> ${postData.id}. ${postData.base}</h3>
        <hr>
        <p class="card-body">${postData.fso}</p>
        <p class="card-body">${postData.email}</p>       
        
        `

        postContainer.appendChild(postElement)
    })
};



// postMethods()