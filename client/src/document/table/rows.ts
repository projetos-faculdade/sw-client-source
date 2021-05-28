import values from "../../api/values"

const getRows = async (info: string) => {
  const data = await values[info]

  const rows = data.map((_, i) => {
    if (info === 'peoples') {
      if (data[i].name) {
        return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].height}</td>
            <td>${data[i].mass}</td>
            <td>${data[i].hair_color}</td>
            <td>${data[i].skin_color}</td>
            <td>${data[i].eye_color}</td>
            <td>${data[i].birth_year}</td>
            <td>${data[i].gender}</td>
          </tr>
        `
      }
    } else if (info === 'films') {
      if (data[i].title) {
        return `
          <tr>
            <td>${data[i].title}</td>
            <td>${data[i].episode_id}</td>
            <td>${data[i].opening_crawl}</td>
            <td>${data[i].director}</td>
            <td>${data[i].producer}</td>
          </tr>
        `
      }
    } else if (info === 'starships') {
      if (data[i].name) {
        return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].model}</td>
            <td>${data[i].manufacturer}</td>
            <td>${data[i].cost_in_credits}</td>
            <td>${data[i].length}</td>
            <td>${data[i].max_atmosphering_speed}</td>
            <td>${data[i].crew}</td>
            <td>${data[i].passengers}</td>
            <td>${data[i].cargo_capacity}</td>
            <td>${data[i].consumables}</td>
            <td>${data[i].hyperdrive_rating}</td>
            <td>${data[i].MGLT}</td>
            <td>${data[i].starship_class}</td>
          </tr> 
        `
      }
    } else if (info === 'vehicles') {
      if (data[i].name) {
        return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].model}</td>
            <td>${data[i].manufacturer}</td>
            <td>${data[i].cost_in_credits}</td>
            <td>${data[i].length}</td>
            <td>${data[i].max_atmosphering_speed}</td>
            <td>${data[i].crew}</td>
            <td>${data[i].passengers}</td>
            <td>${data[i].cargo_capacity}</td>
            <td>${data[i].consumables}</td>
            <td>${data[i].vehicle_class}</td>
          </tr> 
        `
      }
    } else if (info === 'species') {
      if (data[i].name) {
        return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].classification}</td>
            <td>${data[i].designation}</td>
            <td>${data[i].average_height}</td>
            <td>${data[i].skin_colors}</td>
            <td>${data[i].hair_colors}</td>
            <td>${data[i].eye_colors}</td>
            <td>${data[i].average_lifespan}</td>
            <td>${data[i].homeworld}</td>
            <td>${data[i].language}</td>
          </tr> 
        `
      }
    } else if (info === 'planets') {
      if (data[i].name) {
        return `
          <tr>
            <td>${data[i].name}</td>
            <td>${data[i].rotation_period}</td>
            <td>${data[i].orbital_period}</td>
            <td>${data[i].diameter}</td>
            <td>${data[i].climate}</td>
            <td>${data[i].gravity}</td>
            <td>${data[i].terrain}</td>
            <td>${data[i].surface_water}</td>
            <td>${data[i].population}</td>
          </tr> 
        `
      }
    }
  })

  const stringRows = rows + ''
  const htmlRows = stringRows.replace(/[,]/g, '')

  return htmlRows
}

export default getRows