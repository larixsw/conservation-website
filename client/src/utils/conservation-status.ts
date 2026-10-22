export interface StatusInfo {
  label: string
  class: string
}

const statusInfo: {[key: string]: StatusInfo} = {
  NC: {label: 'Not Classified', class: 'text-stone-600'},
  LC: {label: 'Least Concern', class: 'text-green-600'},
  NT: {label: 'Near Threatened', class: 'text-lime-600'},
  VU: {label: 'Vulnerable', class: 'text-yellow-600'},
  EN: {label: 'Endangered', class: 'text-amber-600'},
  CE: {label: 'Critically Endangered', class: 'text-orange-600'},
  EW: {label: 'Extinct in the Wild', class: 'text-red-600'},
  EX: {label: 'Extinct', class: 'text-red-800'}
}

export const getStatusInfo = (status: string): StatusInfo => {
  return statusInfo[status]
}
