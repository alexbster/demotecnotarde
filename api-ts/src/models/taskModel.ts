export interface Welcome2 {
  expand:     string;
  startAt:    number;
  maxResults: number;
  total:      number;
  issues:     Issue[];
}

export interface Issue {
  expand: string;
  id:     string;
  self:   string;
  key:    string;
  fields: Fields;
}

export interface Fields {
  summary:   string;
  issuetype: Issuetype;
  creator:   Creator;
  created:   string;
  project:   Project;
  updated:   string;
  status:    Status;
}

export interface Creator {
  self:         string;
  accountId:    AccountID;
  emailAddress: EmailAddress;
  avatarUrls:   AvatarUrls;
  displayName:  DisplayName;
  active:       boolean;
  timeZone:     TimeZone;
  accountType:  AccountType;
}

export enum AccountID {
  The5570585Dad2783489E403B9B6E4E2Eb6308F2D = '557058:5dad2783-489e-403b-9b6e-4e2eb6308f2d',
  The5C6F1D4Aa7A4C74369189F4D = '5c6f1d4aa7a4c74369189f4d',
}

export enum AccountType {
  Atlassian = 'atlassian',
}

export interface AvatarUrls {
  '48x48': string;
  '24x24': string;
  '16x16': string;
  '32x32': string;
}

export enum DisplayName {
  ArnoldDurán = 'Arnold Durán',
  DiegoArce = 'Diego Arce',
}

export enum EmailAddress {
  ArnoldDuranPfctiCOM = 'arnold.duran@pfcti.com',
  DiegoArcePfctiCOM = 'diego.arce@pfcti.com',
}

export enum TimeZone {
  AmericaCostaRica = 'America/Costa_Rica',
}

export interface Issuetype {
  self:           string;
  id:             string;
  description:    string;
  iconUrl:        string;
  name:           IssuetypeName;
  subtask:        boolean;
  avatarId:       number;
  entityId:       string;
  hierarchyLevel: number;
}

export enum IssuetypeName {
  Historia = 'Historia',
  Tarea = 'Tarea',
}

export interface Project {
  self:           string;
  id:             string;
  key:            ProjectKey;
  name:           ProjectName;
  projectTypeKey: ProjectTypeKey;
  simplified:     boolean;
  avatarUrls:     AvatarUrls;
}

export enum ProjectKey {
  AC = 'AC',
  PV = 'PV',
}

export enum ProjectName {
  ArquitecturasDigitales = 'Arquitecturas Digitales',
  ProyectoVeronica = 'Proyecto Veronica',
}

export enum ProjectTypeKey {
  Software = 'software',
}

export interface Status {
  self:           string;
  description:    string;
  iconUrl:        string;
  name:           StatusName;
  id:             string;
  statusCategory: StatusCategory;
}

export enum StatusName {
  InProgress = 'In Progress',
  Ready = 'READY',
}

export interface StatusCategory {
  self:      string;
  id:        number;
  key:       StatusCategoryKey;
  colorName: ColorName;
  name:      StatusCategoryName;
}

export enum ColorName {
  BlueGray = 'blue-gray',
  Yellow = 'yellow',
}

export enum StatusCategoryKey {
  Indeterminate = 'indeterminate',
  New = 'new',
}

export enum StatusCategoryName {
  InProgress = 'In Progress',
  ToDo = 'To Do',
}
