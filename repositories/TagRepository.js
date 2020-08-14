import tag from '..models/tag'
import Resource from '../models/resources'
import ResourceRepository from './ResourceRepository'


const TagRepository = {
    
    getResTag: async (resname) => {
        return new Promise((resolve, reject) => {
          //call getByTitle?
          resource = ResourceRepository.getByTitle(resname); //lhs is json
          //get the tag document
          tagarray = resource.tag.type;
          resolve(tagarray);
        })
      },

    getBuildTag: async (tagname, buildname) => {

    },
    
    
    addToResource: async (tagname, resname) => {
        
        tagarray = getResTag(resname);
        updated_array = tagarray.push(tagname);
        
        updatedListing = {tag: updated_array};
        Resource.updateOne({title: resname}, {$set: updatedListing});
        
    
    },



}