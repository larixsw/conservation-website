import {ReactElement} from 'react'
import {DocumentRenderer} from '@keystone-6/document-renderer'
import {useQuery, gql} from '@apollo/client'
import {Link, useParams} from 'react-router-dom'
import {FaScroll, FaLeaf, FaPaw, FaInfoCircle} from 'react-icons/fa'
import {GiMushroomGills} from 'react-icons/gi'

import Page from '../components/Page'
import {DocumentField} from '../components/Document'
import {getStatusInfo} from '../utils/conservation-status'

export interface OrganismType {
  name: string
  scientificName: string
  type: string
  conservationStatus: string
  urlId: string
  image: {
    url: string
  }
  description: DocumentField
}

export default function Organism() {
  const {id} = useParams<string>()

  const query = gql`
    query Query($where: OrganismWhereInput!) {
      organisms(where: $where, take: 1) {
        name
        scientificName
        type
        conservationStatus
        image {
          url
        }
        description {
          document
        }
      }
    }
  `

  const {data, loading} = useQuery<{organisms: OrganismType[]}>(query, {
    variables: {where: {urlId: {equals: id}}}
  })

  if (loading) {
    return null
  }

  const organism = data?.organisms[0]
  const {name, scientificName, type, conservationStatus, image, description} = organism!

  const statusInfo = getStatusInfo(conservationStatus)

  const typeIcons: {[key: string]: ReactElement} = {
    Flora: <FaLeaf className="inline" />,
    Fauna: <FaPaw className="inline" />,
    Fungi: <GiMushroomGills className="inline" />
  }

  return (
    <Page name={`${name}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 prose">
          <div className="mb-4">
            <Link className="text-blue-600 font-bold no-underline hover:underline" to={`/ecosystem`}>
              &lsaquo; Back to Ecosystem
            </Link>
          </div>
          <div className="font-bold">
            <FaScroll className="inline" />
            &nbsp;Scientific Name: <span className="italic">{scientificName}</span>
          </div>
          <div>
            {typeIcons[type]}&nbsp;Organism Type: {type}
          </div>
          <div>
            <FaInfoCircle className="inline" />
            &nbsp;Conservation Status: <span className={`font-bold ${statusInfo.class}`}>{statusInfo.label}</span>
          </div>
          <DocumentRenderer document={description.document} />
        </div>
        <div className="flex-1">
          <img src={image.url} alt={name} />
        </div>
      </div>
    </Page>
  )
}
