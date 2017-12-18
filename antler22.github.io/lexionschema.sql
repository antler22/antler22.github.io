USE lexion_vc;

DROP TABLE IF EXISTS lexionvc;
CREATE TABLE lexionvc
(

id int unsigned NOT NULL auto_increment, # Unique ID for the record
Name varchar(30) NOT NULL,
Location varchar(50) NOT NULL,
Serialno varchar(8) NOT NULL,
Dealer varchar(50)  NOT NULL,

-- Specific to LEXION
    -- Basic Information
    Crop varchar(20) NOT NULL,
    Area int(6) NOT NULL,
    Yield int(3) NOT NULL,
    CropPrice decimal(2,2) NULL,
    Efficiency int(2) NOT NULL,
    Labor decimal(2,2) NULL,
    Fuelprice decimal(10,2) NULL,
    DEFprice decimal(10,2) NULL,
    Maintenance int(3) NOT NULL,

    -- Performance Comparison
    LEXIONtype varchar(15) NOT NULL,
    Competitor varchar(15) NOT NULL,
    Header1 int(2) NOT NULL,
    Header2 int(2) NOT NULL,
    Speed1 decimal(2,1) NULL,
    Speed2 decimal(2,1) NULL,
    Fuel1 decimal(2,2) NULL,
    Fuel2 decimal(2,2) NULL,
    DEF1 decimal(2,2) NULL,
    DEF2 decimal(2,2) NULL,
    Residue varchar(5) NOT NULL,
    Pansize1 int(2) NOT NULL,
    Pansize2 int(2) NOT NULL,
    counttype varchar(9) NOT NULL,
    Kernels1 int(4) NOT NULL,
    Kernels2 int(4) NOT NULL,

    -- Results


  PRIMARY KEY     (id)
);



INSERT INTO lexionvc ( Name, Location, Serialno, Dealer, Crop, Area, Yield, Efficiency, Maintenance, LEXIONtype, Competitor, Header1, Header2, Residue, Pansize1, Pansize2, counttype, Kernels1, Kernels2  )
  VALUES ( "Test", "Omaha, NE", "C7900379", "Nebraska Harvest Center", "Wheat", 2000, 85, 85, 200, "760TT", "S790", 40, 40, "Spr", 12, 12, "count", 2, 20 );
