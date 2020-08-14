import tag from '..models/tag'
import ResourceRepository from './ResourceRepository'


const TagRepository = {
    
    getResTag: async (resname) => {
        return new Promise((resolve, reject) => {
          //call getByTitle?
          resource = ResourceRepository.getByTitle(resname); //lhs is json
          //get the tag document
          tagarray = resource.tag
          resolve(tagarray);
        })
      },

    getBuildTag: async (tagname, buildname) => {

    },
    
    
    addToResource: async (tagname, resname) => {
        //call getByTitle from ResourceRepository?
        //.updateOne(tags: tags.push(tagname))


    },



}