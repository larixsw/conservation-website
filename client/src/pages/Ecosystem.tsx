import {useState} from 'react'
import {gql, useQuery} from '@apollo/client'
import {Link} from 'react-router-dom'

import {OrganismType} from './Organism'
import {getStatusInfo} from '../utils/conservation-status'

import Page from '../components/Page'
import Filter from '../components/Filter'
import Document, {DocumentField} from '../components/Document'

export default function Ecosystem() {
  const [filter, setFilter] = useState<string | null>(null)

  const query = gql`
    query Query {
      ecosystemPage {
        content {
          document
        }
      }
      organisms {
        name
        scientificName
        type
        urlId
        conservationStatus
        image {
          url
        }
      }
    }
  `

  interface EcosystemData {
    ecosystemPage: {content: DocumentField} | null
    organisms: OrganismType[]
  }

  const {data} = useQuery<EcosystemData>(query)
  const document = data?.ecosystemPage?.content.document
  const organisms = data?.organisms || []

  return (
    <Page name="Ecosystem">
      <div className="mb-4">
        <Document document={document} />
      </div>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Filter tag="Flora" filter={filter} callback={setFilter} />
        <Filter tag="Fauna" filter={filter} callback={setFilter} />
        <Filter tag="Fungi" filter={filter} callback={setFilter} />
      </div>
      <div className="columns-xs gap-4">
        {organisms
          .filter(organism => filter === null || organism.type === filter)
          .map((organism, i) => (
            <EcosystemItem key={i} organism={organism} filter={filter} />
          ))}
      </div>
    </Page>
  )
}

function EcosystemItem(props: {organism: OrganismType; filter: string | null}) {
  const {name, scientificName, type, urlId, conservationStatus, image} = props.organism

  const statusInfo = getStatusInfo(conservationStatus)

  return (
    <div
      key={props.filter}
      className="flex flex-col mb-4 break-inside-avoid bg-stone-300 rounded overflow-hidden animate-expand"
    >
      <img src={image.url} alt={name} />
      <div className="px-2 py-4 prose">
        <div className="bg-stone-400 rounded px-1 text-xs w-fit">{type}</div>
        <div className="text-md hyphens-auto break-words">
          <span className="font-bold">{name}</span> (<span className="italic">{scientificName}</span>)
        </div>
        <div className="text-sm">
          Conservation Status:
          <span className={`font-bold ${statusInfo.class}`}>&nbsp;{statusInfo.label}</span>
        </div>
        <Link className="text-blue-600 font-bold no-underline hover:underline" to={`/ecosystem/${urlId}`}>
          Learn More &rsaquo;
        </Link>
      </div>
    </div>
  )
}
