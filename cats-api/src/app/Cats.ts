export interface Cats {
	id: number;
	name: string;
	url: string;
	sub_id: string;	
  }
  
  export interface CatsInformation {
	data: Cats[];
  }