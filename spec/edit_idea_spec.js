//=require editIdea

describe('updateTitle', function() {
  it("can alter a post's title", function() {
    var post = setPost;
    assert.equal($(post).length, 1))
  })
});

function setPost(){
  return {idea: { title: "Cracker", body: "Cookie", quality: 0 }
  }
}
