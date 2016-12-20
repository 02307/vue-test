<script type="text/javascript">
const dropdown = require( '../mixins/dropdown.js' );
module.exports = {

    mixins : [ dropdown ],

    props: {
        dropup : {
        	type : Boolean
        },
        tag : {
            type : String,
            default : 'div'
        }
    },

    render( createElement ){
        return createElement( this.tag , {
            class : {
                dropdown : true,
                dropup : this.dropup,
                open : this.isOpen
            },
            directives : [
                {
                    name : 'outclick',
                    expression : 'hide'
                }
            ]

        } , this.$slots.default );
    }

}

</script>

