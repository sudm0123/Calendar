var codropsEvents = {
	
	// Content with Link [Non-Repetitive]
	'11-21-2013' : '<a href="http://www.wincalendar.com/Great-American-Smokeout">Great American Smokeout</a>',
	'11-11-2013' : '<a href="http://www.wincalendar.com/Remembrance-Day">Remembrance Day (Canada)</a>',
	'11-03-2013' : '<a href="http://www.wincalendar.com/Daylight-Saving-Time-Ends">Daylight Saving Time Ends</a>',
	
	// Static Content [Non-Repetitive]
	'11-13-2013' : '<span>Ashura [An example of an complete date event (11-13-2013)]</span>',
	'11-04-2013' : '<span>Islamic New Year</span>',	
	'11-14-2014' : '<span>Children\'s Day</span>',
	
	// Content that repeats every year
	'12-25-YYYY' : '<span>Christmas Day [Date : 12-25-YYYY]</span>',
	'01-01-YYYY' : '<span>New Year\'s Eve (Event repeats every YEAR)</span>',
	
	// Content that repeats every month
	'MM-02-2013' : '<span>Yeah, Monthly [MM-02-2013]</span>',
	
	//Content that repeats every month and year
	'MM-07-YYYY' : '<span>[MM-07-YYYY], Monthly and Yearly</span>',
	
	// Content that 
	'12-DD-YYYY' : '<span>[12-DD-YYYY] Whole month and Year</span>',
	
	// 
	'11-DD-2014' : {content : '<span>Ex: {\'11-DD-2014\' : {content : \'Something\', end : 20}}</span>', end : 02},
	
	'02-DD-2014' : {content : '<span>Ex: {\'02-DD-2014\' : {content : \'Something\', start : 10, end : 20}}</span>', start : 10, end : 20},
	
	'TODAY' : '<span>Today, [Date : \'TODAY\']</span>'
};