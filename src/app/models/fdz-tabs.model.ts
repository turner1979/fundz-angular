export interface FzdTabs {
  activeIndex: number;
  tabs: Array<FdzTab>;
}

export interface FdzTab {
  iconClass?: string;
  name: string;
}
